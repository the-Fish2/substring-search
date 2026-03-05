import json

def load_words():
    with open('words_alpha.txt') as word_file:
        valid_words = set(word_file.read().split())
    return valid_words

def load_word_frequencies():
    with open('../words_dictionary_ngram.json') as f:
        return json.load(f)

def extract_trigrams_by_real_words(words, word_dict):
    """Count 'real words' (frequency >= 1) containing each trigram."""
    trigram_real_count = {}

    for word in words:
        if len(word) >= 3:
            freq = word_dict.get(word, 0)
            is_real = freq >= 1
            seen_trigrams = set()
            for i in range(len(word) - 2):
                trigram = word[i:i+3]
                if trigram not in seen_trigrams:
                    seen_trigrams.add(trigram)
                    if is_real:
                        trigram_real_count[trigram] = trigram_real_count.get(trigram, 0) + 1

    return trigram_real_count

if __name__ == '__main__':
    english_words = load_words()
    word_dict = load_word_frequencies()
    trigram_real_count = extract_trigrams_by_real_words(english_words, word_dict)

    print(f"Total trigrams found: {len(trigram_real_count)}")
    print(f"Total words processed: {len(english_words)}")

    # Filter: 8-40 real words (words with zipf frequency >= 1)
    filtered_trigrams = sorted([t for t in trigram_real_count if 8 <= trigram_real_count[t] <= 40])

    print(f"\nTrigrams with 8-40 real words: {len(filtered_trigrams)}")
    print(f"First 20: {filtered_trigrams[:20]}")

    # Save filtered trigrams to a separate file
    with open('filtered_trigrams.json', 'w') as f:
        json.dump(filtered_trigrams, f, indent=2)
