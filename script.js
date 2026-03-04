// Array of letter combinations
const letterSets = ['aeo', 'bte', 'ync', 'cle', 'tre', 'art', 'obo'];

// Get today's letter set based on day mod 7
function getTodayLetters() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const index = dayOfYear % 7;
    return letterSets[index];
}

// Load dictionary
let dictionary = {};
let shortestWord = null;
let longestWord = null;

// Load the dictionary file
fetch('words_dictionary.json')
    .then(response => response.json())
    .then(data => {
        dictionary = data;
        console.log('Dictionary loaded successfully');
    })
    .catch(error => {
        console.error('Error loading dictionary:', error);
        alert('Error loading word dictionary. Please make sure words_dictionary.json is in the same folder.');
    });

// Display today's letters
const currentLetters = getTodayLetters();
document.getElementById('lettersDisplay').textContent = currentLetters;

// Form submission
const form = document.getElementById('wordForm');
const input = document.getElementById('wordInput');
const errorMessage = document.getElementById('errorMessage');
const shortestResult = document.getElementById('shortestResult');
const longestResult = document.getElementById('longestResult');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const word = input.value.trim().toLowerCase();
    
    // Clear error message
    errorMessage.textContent = '';
    
    // Check if word is empty
    if (!word) {
        return;
    }
    
    // Check if word is in dictionary
    if (!dictionary.hasOwnProperty(word)) {
        showError("enter a real word!");
        shakeInput();
        return;
    }
    
    // Check if word contains all three letters
    if (!containsAllLetters(word, currentLetters)) {
        showError(`word must contain all letters: ${currentLetters.toUpperCase()}`);
        shakeInput();
        return;
    }
    
    // Valid word! Update results
    updateResults(word);
    
    // Clear input
    input.value = '';
});

function containsAllLetters(word, letters) {
    for (let letter of letters) {
        if (!word.includes(letter)) {
            return false;
        }
    }
    return true;
}

function showError(message) {
    errorMessage.textContent = message;
    setTimeout(() => {
        errorMessage.textContent = '';
    }, 3000);
}

function shakeInput() {
    input.classList.add('shake');
    setTimeout(() => {
        input.classList.remove('shake');
    }, 500);
}

function updateResults(word) {
    // Update shortest word
    if (!shortestWord || word.length < shortestWord.length) {
        shortestWord = word;
        shortestResult.innerHTML = `SHORTEST WORD FOUND: <span class="word-highlight">${word.toUpperCase()}</span> (${word.length} letters)`;
    }
    
    // Update longest word
    if (!longestWord || word.length > longestWord.length) {
        longestWord = word;
        longestResult.innerHTML = `LONGEST WORD FOUND: <span class="word-highlight">${word.toUpperCase()}</span> (${word.length} letters)`;
    }
}