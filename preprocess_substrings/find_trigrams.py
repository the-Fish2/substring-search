import json

def load_words():
    with open('words_alpha.txt') as word_file:
        valid_words = set(word_file.read().split())
    return valid_words

def extract_trigrams(words):
    trigram_freq = {}
    
    for word in words:
        # Only process words with at least 3 characters
        if len(word) >= 3:
            # Extract all trigrams from the word
            for i in range(len(word) - 2):
                trigram = word[i:i+3]
                trigram_freq[trigram] = trigram_freq.get(trigram, 0) + 1
    
    sorted_trigs = dict(sorted(trigram_freq.items(), key=lambda item: item[1], reverse=True))
    return sorted_trigs

if __name__ == '__main__':
    english_words = load_words()
    trigram_frequencies = extract_trigrams(english_words)
    
    # Save to JSON file
    with open('../trigram_frequencies.json', 'w') as f:
        json.dump(trigram_frequencies, f, indent=2)
    
    print(f"Total trigrams found: {len(trigram_frequencies)}")
    print(f"Total words processed: {len(english_words)}")

    filtered_trigrams = [trigram for trigram, freq in trigram_frequencies.items() if 20 <= freq <= 100]
    
    print(f"\nTrigrams with frequency 20-100: {len(filtered_trigrams)}")
    print(f"first 20 trigs: {filtered_trigrams[:20]}")
    
    # Save filtered trigrams to a separate file
    with open('filtered_trigrams.json', 'w') as f:
        json.dump(filtered_trigrams, f, indent=2)