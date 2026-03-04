#!/usr/bin/env python3
"""One-time script to update words_dictionary.json values from 1 to wordfreq Zipf scores."""

import json
from wordfreq import zipf_frequency

with open('words_dictionary.json', 'r') as f:
    dictionary = json.load(f)

updated = {}
for word in dictionary:
    freq = zipf_frequency(word, 'en')
    updated[word] = round(freq, 2)

with open('words_dictionary.json', 'w') as f:
    json.dump(updated, f)

print(f"Updated {len(updated)} words with frequency scores.")
