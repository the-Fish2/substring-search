#!/usr/bin/env python3
"""
Generate words_dictionary_ngram.json using Google Books Ngram Viewer API (American English).

Queries both lowercase and capitalized forms of each word to capture
sentence-initial occurrences, then sums the frequencies. Uses 4 parallel
workers with exponential backoff on 429 errors. Progress is checkpointed.

Estimated time: ~40-50 minutes for 370k words.
"""

import json
import math
import urllib.request
import urllib.parse
import urllib.error
import os
import sys
import time
import threading
from concurrent.futures import ThreadPoolExecutor, as_completed

BATCH_SIZE = 50  # 50 words = 100 query terms (lowercase + capitalized)
WORKERS = 4
CHECKPOINT_FILE = '.ngram_cache/api_checkpoint.json'
API_URL = 'https://books.google.com/ngrams/json'
CORPUS = 'en-US-2019'
YEAR_START = 2000
YEAR_END = 2019
MAX_RETRIES = 5


def query_batch(words):
    """Query the Ngram Viewer API for lowercase + capitalized forms. Returns {word: avg_freq}."""
    # Build query with both forms: "cat,Cat,dog,Dog,..."
    terms = []
    for w in words:
        terms.append(w.lower())
        cap = w.capitalize()
        if cap != w.lower():
            terms.append(cap)

    content = ','.join(terms)
    params = urllib.parse.urlencode({
        'content': content,
        'year_start': YEAR_START,
        'year_end': YEAR_END,
        'corpus': CORPUS,
        'smoothing': 0,
    })
    url = f'{API_URL}?{params}'

    for attempt in range(MAX_RETRIES):
        try:
            req = urllib.request.urlopen(url, timeout=30)
            data = json.loads(req.read())
            # Sum frequencies for lowercase and capitalized forms
            result = {}
            for item in data:
                ngram = item['ngram']
                key = ngram.lower()
                ts = item.get('timeseries', [])
                freq = sum(ts) / len(ts) if ts else 0
                result[key] = result.get(key, 0) + freq
            return result
        except urllib.error.HTTPError as e:
            if e.code == 429 and attempt < MAX_RETRIES - 1:
                wait = 2 ** (attempt + 1)
                time.sleep(wait)
                continue
            raise
        except Exception:
            if attempt < MAX_RETRIES - 1:
                time.sleep(2)
                continue
            raise


def main():
    print('Loading dictionary...')
    with open('words_dictionary.json') as f:
        dictionary = json.load(f)

    all_words = list(dictionary.keys())
    total = len(all_words)
    print(f'Looking up frequencies for {total} words via Ngram Viewer API')
    print(f'  Batch size: {BATCH_SIZE} words ({BATCH_SIZE * 2} query terms), Workers: {WORKERS}')
    print(f'  Querying both lowercase + capitalized forms\n')

    os.makedirs('.ngram_cache', exist_ok=True)

    # Load checkpoint if exists
    word_freqs = {}
    start_batch = 0
    if os.path.exists(CHECKPOINT_FILE):
        with open(CHECKPOINT_FILE) as f:
            checkpoint = json.load(f)
        word_freqs = checkpoint.get('word_freqs', {})
        start_batch = checkpoint.get('next_batch', 0)
        print(f'Resuming from batch {start_batch} ({len(word_freqs)} words already done)\n')

    batches = [all_words[i:i + BATCH_SIZE] for i in range(0, total, BATCH_SIZE)]
    total_batches = len(batches)
    remaining = list(range(start_batch, total_batches))

    if not remaining:
        print('All batches already completed!')
    else:
        lock = threading.Lock()
        completed = [0]
        hard_errors = [0]

        def process_batch(batch_idx):
            batch = batches[batch_idx]
            try:
                result = query_batch(batch)
                with lock:
                    word_freqs.update(result)
                    for w in batch:
                        if w.lower() not in word_freqs:
                            word_freqs[w.lower()] = 0
                    hard_errors[0] = 0
                    completed[0] += 1
                    pct = len(word_freqs) / total * 100
                    print(f'\r  [{completed[0]}/{len(remaining)}] ~{len(word_freqs)}/{total} words ({pct:.1f}%) — {len(result)} hits', end='', flush=True)
                return batch_idx, True
            except Exception as e:
                with lock:
                    hard_errors[0] += 1
                    for w in batch:
                        if w.lower() not in word_freqs:
                            word_freqs[w.lower()] = 0
                    print(f'\n  Hard error on batch {batch_idx + 1} (after {MAX_RETRIES} retries): {e}')
                    if hard_errors[0] > 10:
                        return batch_idx, False
                return batch_idx, True

        # Process in chunks for checkpointing
        CHECKPOINT_EVERY = 100
        for chunk_start in range(0, len(remaining), CHECKPOINT_EVERY):
            chunk = remaining[chunk_start:chunk_start + CHECKPOINT_EVERY]
            abort = False

            with ThreadPoolExecutor(max_workers=WORKERS) as executor:
                futures = {executor.submit(process_batch, idx): idx for idx in chunk}
                for future in as_completed(futures):
                    batch_idx, ok = future.result()
                    if not ok:
                        abort = True
                        break

            # Checkpoint after each chunk
            next_batch = chunk[-1] + 1 if chunk else start_batch
            with open(CHECKPOINT_FILE, 'w') as f:
                json.dump({'word_freqs': word_freqs, 'next_batch': next_batch}, f)

            if abort:
                print('\nToo many hard errors, checkpoint saved.')
                sys.exit(1)

    print('\n\nConverting to Zipf scale...')

    result = {}
    for word in dictionary:
        freq = word_freqs.get(word.lower(), 0)
        if freq <= 0:
            result[word] = 0
        else:
            # freq is already a fraction (occurrences / total words in corpus)
            # Zipf = log10(freq * 1e9)  — matches wordfreq's formula
            result[word] = round(math.log10(freq * 1e9), 2)

    with open('words_dictionary_ngram.json', 'w') as f:
        json.dump(result, f)

    # Clean up checkpoint
    if os.path.exists(CHECKPOINT_FILE):
        os.remove(CHECKPOINT_FILE)

    nonzero = sum(1 for v in result.values() if v > 0)
    above_1 = sum(1 for v in result.values() if v >= 1)
    print(f'\nSaved {len(result)} words to words_dictionary_ngram.json')
    print(f'  {nonzero} words with frequency data (Zipf > 0)')
    print(f'  {above_1} words with Zipf >= 1 (would be "real" words)')
    print(f'  {len(result) - nonzero} words with zero frequency')


if __name__ == '__main__':
    main()
