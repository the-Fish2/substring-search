// letterSets is loaded from letterSets.js

// Game start date: March 4, 2026 (puzzle index 0)
const GAME_START_DATE = new Date(2026, 2, 4);
GAME_START_DATE.setHours(0, 0, 0, 0);

// Read ?date=YYYY-MM-DD from URL, default to today. Validates range.
function getPuzzleDate() {
    const params = new URLSearchParams(window.location.search);
    const dateParam = params.get('date');
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (dateParam) {
        const parts = dateParam.split('-');
        if (parts.length === 3) {
            const parsed = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
            parsed.setHours(0, 0, 0, 0);
            if (!isNaN(parsed.getTime()) && parsed >= GAME_START_DATE && parsed <= today) {
                return parsed;
            }
        }
    }
    return today;
}

function getLettersForDate(date) {
    const epoch = new Date(2025, 0, 1);
    const daysSinceEpoch = Math.floor((date - epoch) / 1000 / 60 / 60 / 24);
    const index = (daysSinceEpoch - 427) % letterSets.length;
    return letterSets[index];
}

function dateToKey(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

// Constants
const MIN_WORD_FREQUENCY = 1;
const HINT_THRESHOLDS = [0.25, 0.50, 0.75];

// Load dictionary
let dictionary = {};
let shortestWord = null;
let longestWord = null;
let shownShortestMsg = false;
let shownLongestMsg = false;
let realWords = [];
let bonusWords = [];
let foundRealWords = new Set();
let foundBonusWords = new Set();
let allValidWords = [];
let debugVisible = false;
let definitionCache = {};
let sortByLength = true; // true = by length, false = alphabetical

// --- Persistence ---
function savePuzzleState() {
    try {
        const key = 'containment_puzzles';
        const raw = localStorage.getItem(key);
        const store = raw ? JSON.parse(raw) : { schemaVersion: 1, puzzles: {} };
        store.schemaVersion = 1;
        if (!store.puzzles) store.puzzles = {};
        store.puzzles[dateToKey(puzzleDate)] = {
            foundReal: [...foundRealWords],
            foundBonus: [...foundBonusWords]
        };
        localStorage.setItem(key, JSON.stringify(store));
    } catch (e) {
        // localStorage unavailable or full — degrade silently
    }
}

function loadPuzzleState() {
    try {
        const raw = localStorage.getItem('containment_puzzles');
        if (!raw) return null;
        const store = JSON.parse(raw);
        const entry = store && store.puzzles && store.puzzles[dateToKey(puzzleDate)];
        return entry || null;
    } catch (e) {
        return null;
    }
}

function restorePuzzleState(saved) {
    // Validate and populate foundRealWords
    const realSet = new Set(realWords);
    const bonusSet = new Set(bonusWords);
    if (Array.isArray(saved.foundReal)) {
        for (const w of saved.foundReal) {
            if (realSet.has(w)) foundRealWords.add(w);
        }
    }
    if (Array.isArray(saved.foundBonus)) {
        for (const w of saved.foundBonus) {
            if (bonusSet.has(w)) foundBonusWords.add(w);
        }
    }

    // Derive shortestWord / longestWord from all found words
    const allFound = [...foundRealWords, ...foundBonusWords];
    for (const w of allFound) {
        if (!shortestWord || w.length < shortestWord.length) shortestWord = w;
        if (!longestWord || w.length > longestWord.length) longestWord = w;
    }

    // Derive shownShortestMsg / shownLongestMsg
    const absShortestLen = realWords.length > 0 ? realWords[0].length : 0;
    const absLongestLen = realWords.length > 0 ? realWords[realWords.length - 1].length : 0;
    if (shortestWord && shortestWord.length === absShortestLen) shownShortestMsg = true;
    if (longestWord && longestWord.length === absLongestLen) shownLongestMsg = true;

    // Show share button if applicable
    if (shortestWord || longestWord) {
        shareBtn.style.display = 'inline-block';
    }
}

function savePrefs() {
    try {
        localStorage.setItem('containment_prefs', JSON.stringify({ sortByLength }));
    } catch (e) {}
}

function loadPrefs() {
    try {
        const raw = localStorage.getItem('containment_prefs');
        if (!raw) return;
        const prefs = JSON.parse(raw);
        if (typeof prefs.sortByLength === 'boolean') sortByLength = prefs.sortByLength;
    } catch (e) {}
}

// Load the dictionary file (prefer ngram version, fall back to original)
fetch('words_dictionary_ngram.json')
    .then(response => {
        if (!response.ok) return fetch('words_dictionary.json');
        return response;
    })
    .then(response => response.json())
    .then(data => {
        dictionary = data;
        console.log('Dictionary loaded successfully');
        allValidWords = Object.keys(dictionary).filter(word => containsAllLetters(word, currentLetters));
        realWords = allValidWords.filter(w => dictionary[w] >= MIN_WORD_FREQUENCY).sort((a, b) => a.length - b.length || a.localeCompare(b));
        bonusWords = allValidWords.filter(w => dictionary[w] < MIN_WORD_FREQUENCY);
        loadPrefs();
        const saved = loadPuzzleState();
        if (saved) restorePuzzleState(saved);
        updateProgressBar();
        updateWordList();
    })
    .catch(error => {
        console.error('Error loading dictionary:', error);
        dictionary = {"sightly": 1, "hotel": 1}
        alert('Error loading word dictionary. Please make sure words_dictionary.json is in the same folder.');
    });


// Resolve puzzle date and letters
const puzzleDate = getPuzzleDate();
const currentLetters = getLettersForDate(puzzleDate);
document.getElementById('lettersDisplay').textContent = currentLetters;

// Form submission
const form = document.getElementById('wordForm');
const input = document.getElementById('wordInput');
const errorMessage = document.getElementById('errorMessage');
const shareBtn = document.getElementById('shareBtn');
const shareMessage = document.getElementById('shareMessage');
const debugBtn = document.getElementById('debugBtn');

// Keep input focused on desktop
if (!('ontouchstart' in window)) {
    document.addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'A') {
            input.focus();
        }
    });
    input.focus();
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const word = input.value.trim().toLowerCase();
    
    // Clear previous message
    clearMessage();
    
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
        showError(`Word must contain '${currentLetters.toUpperCase()}' consecutively`);
        shakeInput();
        return;
    }

    // Check for duplicates
    if (foundRealWords.has(word) || foundBonusWords.has(word)) {
        showError("already found!");
        shakeInput();
        return;
    }

    // Valid word! Update results
    updateResults(word);
    fetchDefinition(word);

    // Clear input
    input.value = '';
});

function getFormattedDate() {
    const month = String(puzzleDate.getMonth() + 1).padStart(2, '0');
    const day = String(puzzleDate.getDate()).padStart(2, '0');
    const year = puzzleDate.getFullYear();
    return `${month}/${day}/${year}`;
}

const RATING_LABELS = ['⭐', '⭐⭐', '⭐⭐⭐', '🌟'];

function getRating() {
    if (realWords.length === 0) return 0;
    const pct = foundRealWords.size / realWords.length;
    if (pct >= 1) return 3; // Gold Star (Perfect)
    if (pct >= 0.75) return 2; // 3 stars
    if (pct >= 0.50) return 1; // 2 stars
    if (pct >= 0.25) return 0; // 1 star
    return -1; // no rating yet
}

shareBtn.addEventListener('click', () => {
    if (!shortestWord && !longestWord) {
        return;
    }

    const shortestLength = shortestWord ? shortestWord.length : 'N/A';
    const longestLength = longestWord ? longestWord.length : 'N/A';
    const dateStr = dateToKey(puzzleDate);
    const url = window.location.href.split('?')[0] + `?date=${dateStr}`;
    const date = getFormattedDate();
    const rating = getRating();
    const ratingText = rating >= 0 ? RATING_LABELS[rating] : '';
    const bonusText = foundBonusWords.size > 0 ? `Bonus words: ${foundBonusWords.size}\n` : '';

    const shareText = `📚Substrings ${date}📚
${foundRealWords.size}/${realWords.length} words found ${ratingText}
${bonusText}Shortest: ${shortestLength} | Longest: ${longestLength}
Can you beat me, the amazing fabulous walking dictionary? 🤔🧐🤓
Play at ${url}`;
    
    // Copy to clipboard
    navigator.clipboard.writeText(shareText).then(() => {
        shareMessage.textContent = 'Copied to clipboard!';
        setTimeout(() => {
            shareMessage.textContent = '';
        }, 3000);
    }).catch(err => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = shareText;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            shareMessage.textContent = 'Copied to clipboard!';
            setTimeout(() => {
                shareMessage.textContent = '';
            }, 3000);
        } catch (err) {
            shareMessage.textContent = 'Could not copy. Please copy manually.';
            console.error('Copy failed:', err);
        }
        document.body.removeChild(textArea);
    });
});

// Definition fetching
async function fetchDefinition(word) {
    if (definitionCache[word]) return definitionCache[word];
    try {
        const res = await fetch(`https://freedictionaryapi.com/api/v1/entries/en/${encodeURIComponent(word)}`);
        if (!res.ok) {
            definitionCache[word] = null;
            return null;
        }
        const data = await res.json();
        const entries = data.entries || [];
        const pronunc = entries[0]?.pronunciations?.find(p => p.text);
        const phonetic = pronunc?.text || '';
        const meanings = [];
        for (const entry of entries) {
            if (meanings.length >= 2) break;
            for (const sense of (entry.senses || [])) {
                if (meanings.length >= 2) break;
                if (sense.definition) {
                    meanings.push({
                        partOfSpeech: entry.partOfSpeech || '',
                        definition: sense.definition
                    });
                }
            }
        }
        if (meanings.length === 0) {
            definitionCache[word] = null;
            return null;
        }
        definitionCache[word] = { phonetic, meanings };
        return definitionCache[word];
    } catch {
        definitionCache[word] = null;
        return null;
    }
}

// Tooltip
const tooltip = document.getElementById('definitionTooltip');
let tooltipTimeout = null;

function showTooltip(el, word) {
    clearTimeout(tooltipTimeout);
    const def = definitionCache[word];
    const isHint = el.dataset.hint === 'true';
    let html = '';
    if (isHint) {
        const subIdx = word.indexOf(currentLetters);
        const masked = Array.from(word).map((ch, i) => {
            if (i === 0) return ch.toUpperCase();
            if (i >= subIdx && i < subIdx + currentLetters.length) return ch.toUpperCase();
            return '_';
        }).join('');
        html += `<div class="def-word">${masked} (${word.length})</div>`;
    } else {
        html += `<div class="def-word">${word.toUpperCase()}</div>`;
    }
    if (def === undefined) {
        html += '<div class="def-loading">Loading...</div>';
    } else if (def === null) {
        html += '<div class="def-error">No dictionary entry available</div>';
    } else {
        if (!isHint && def.phonetic) html += `<div class="def-phonetic">${def.phonetic}</div>`;
        for (const m of def.meanings) {
            html += `<div class="def-pos">${m.partOfSpeech}</div>`;
            html += `<div class="def-meaning">${m.definition}</div>`;
        }
    }
    tooltip.innerHTML = html;
    tooltip.classList.add('visible');

    const rect = el.getBoundingClientRect();
    const tooltipWidth = tooltip.offsetWidth;
    let left = rect.left + rect.width / 2 - tooltipWidth / 2;
    left = Math.max(8, Math.min(left, window.innerWidth - tooltipWidth - 8));
    let top = rect.top - 8 - tooltip.offsetHeight;
    if (top < 8) top = rect.bottom + 8;
    tooltip.style.top = top + 'px';
    tooltip.style.left = left + 'px';
}

function hideTooltip() {
    tooltipTimeout = setTimeout(() => {
        tooltip.classList.remove('visible');
    }, 100);
}

function hideTooltipNow() {
    clearTimeout(tooltipTimeout);
    tooltip.classList.remove('visible');
}

function dismissTooltipOnOutsideTap(e) {
    if (!tooltip.contains(e.target) && !e.target.closest('[data-word]')) {
        hideTooltipNow();
        document.removeEventListener('touchstart', dismissTooltipOnOutsideTap);
        document.removeEventListener('scroll', dismissTooltipOnScroll, true);
    }
}

function dismissTooltipOnScroll() {
    hideTooltipNow();
    document.removeEventListener('touchstart', dismissTooltipOnOutsideTap);
    document.removeEventListener('scroll', dismissTooltipOnScroll, true);
}

function attachTooltipListeners() {
    document.querySelectorAll('[data-word]').forEach(el => {
        el.addEventListener('mouseenter', () => showTooltip(el, el.dataset.word));
        el.addEventListener('mouseleave', hideTooltip);
        el.addEventListener('touchstart', (e) => {
            e.preventDefault();
            showTooltip(el, el.dataset.word);
            document.removeEventListener('touchstart', dismissTooltipOnOutsideTap);
            document.removeEventListener('scroll', dismissTooltipOnScroll, true);
            setTimeout(() => {
                document.addEventListener('touchstart', dismissTooltipOnOutsideTap);
                document.addEventListener('scroll', dismissTooltipOnScroll, true);
            }, 10);
        });
    });
}

function containsAllLetters(word, letters) {
    if (word.includes(letters)) {
        return true;
    }
    return false;
}

function clearMessage() {
    errorMessage.textContent = '';
    errorMessage.className = 'error-message';
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.className = 'error-message';
}

function showGoldMessage(message) {
    errorMessage.textContent = message;
    errorMessage.className = 'error-message gold-message';
}

function shakeInput() {
    input.classList.add('shake');
    input.value = '';
    setTimeout(() => {
        input.classList.remove('shake');
    }, 500);
}

function updateResults(word) {
    // Categorize the word
    if (dictionary[word] >= MIN_WORD_FREQUENCY) {
        foundRealWords.add(word);
    } else {
        foundBonusWords.add(word);
    }

    // Determine absolute shortest/longest from real words only
    const absShortestLen = realWords.length > 0 ? realWords[0].length : 0;
    const absLongestLen = realWords.length > 0 ? realWords[realWords.length - 1].length : 0;

    // Update shortest/longest tracking
    if (!shortestWord || word.length < shortestWord.length) shortestWord = word;
    if (!longestWord || word.length > longestWord.length) longestWord = word;

    // Special messages
    const isAbsShortest = !shownShortestMsg && word.length === absShortestLen;
    const isAbsLongest = !shownLongestMsg && word.length === absLongestLen;
    if (dictionary[word] < MIN_WORD_FREQUENCY) {
        showGoldMessage('Bonus word found!');
    } else if (isAbsShortest && isAbsLongest) {
        showGoldMessage('Shortest AND longest word found!');
        shownShortestMsg = true;
        shownLongestMsg = true;
    } else if (isAbsShortest) {
        showGoldMessage('Shortest possible word found!');
        shownShortestMsg = true;
    } else if (isAbsLongest) {
        showGoldMessage('Longest possible word found!');
        shownLongestMsg = true;
    }

    if (shortestWord || longestWord) {
        shareBtn.style.display = 'inline-block';
    }

    updateProgressBar();
    updateWordList();

    // Celebrate when all real words found
    if (realWords.length > 0 && foundRealWords.size === realWords.length) {
        celebrateConfetti();
    }

    savePuzzleState();
}

function celebrateConfetti() {
    const duration = 3000;
    const end = Date.now() + duration;
    (function frame() {
        confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 } });
        confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 } });
        if (Date.now() < end) requestAnimationFrame(frame);
    })();
}

function getCurrentHintLevel() {
    if (realWords.length === 0) return 0;
    const pct = foundRealWords.size / realWords.length;
    let level = 0;
    for (const threshold of HINT_THRESHOLDS) {
        if (pct >= threshold) level++;
    }
    return level;
}

function maskWord(word, hintLevel) {
    if (hintLevel === 0) return null;
    const subIdx = word.indexOf(currentLetters);
    if (hintLevel >= 3) {
        // Show first letter + substring position + hoverable definition
        const masked = Array.from(word).map((ch, i) => {
            if (i === 0) return ch.toUpperCase();
            if (i >= subIdx && i < subIdx + currentLetters.length) return ch.toUpperCase();
            return '_';
        }).join('');
        return `<span class="hint-item" data-key="${word}" data-word="${word}" data-hint="true">${masked} (${word.length})</span>`;
    }
    if (hintLevel >= 2) {
        // Show first letter + substring position
        const masked = Array.from(word).map((ch, i) => {
            if (i === 0) return ch.toUpperCase();
            if (i >= subIdx && i < subIdx + currentLetters.length) return ch.toUpperCase();
            return '_';
        }).join('');
        return `<span class="hint-item" data-key="${word}">${masked} (${word.length})</span>`;
    }
    // Level 1: first letter only
    return `<span class="hint-item" data-key="${word}">${word[0].toUpperCase()}${'_'.repeat(word.length - 1)} (${word.length})</span>`;
}

function updateWordList() {
    const wordListDiv = document.getElementById('wordList');
    const hintLevel = getCurrentHintLevel();
    const totalFound = foundRealWords.size + foundBonusWords.size;

    // FLIP: snapshot old positions
    const oldPositions = {};
    wordListDiv.querySelectorAll('[data-key]').forEach(el => {
        const rect = el.getBoundingClientRect();
        oldPositions[el.dataset.key] = { left: rect.left, top: rect.top };
    });

    // Determine absolute shortest/longest lengths
    const allSorted = [...allValidWords].sort((a, b) => a.length - b.length);
    const absShortestLen = allSorted.length > 0 ? allSorted[0].length : 0;
    const absLongestLen = allSorted.length > 0 ? allSorted[allSorted.length - 1].length : 0;

    // Sort real words based on current toggle
    const sortedRealWords = sortByLength
        ? [...realWords].sort((a, b) => a.length - b.length || a.localeCompare(b))
        : [...realWords].sort((a, b) => a.localeCompare(b));

    // Build merged real words list (found + hints)
    let realWordsHtml = '';
    for (const word of sortedRealWords) {
        if (foundRealWords.has(word)) {
            const isGold = word.length === absShortestLen || word.length === absLongestLen;
            const cls = isGold ? 'word-item word-gold' : 'word-item';
            realWordsHtml += `<span class="${cls}" data-key="${word}" data-word="${word}">${word.toUpperCase()} (${word.length})</span>`;
        } else {
            const hint = maskWord(word, hintLevel);
            if (hint) realWordsHtml += hint;
        }
    }

    // Bonus words section
    let bonusHtml = '';
    if (foundBonusWords.size > 0) {
        const sortedBonus = sortByLength
            ? [...foundBonusWords].sort((a, b) => a.length - b.length || a.localeCompare(b))
            : [...foundBonusWords].sort((a, b) => a.localeCompare(b));
        bonusHtml = '<div class="word-list-title" style="margin-top:15px;">BONUS WORDS</div><div class="word-list-items">' +
            sortedBonus.map(w => {
                return `<span class="bonus-item" data-key="${w}" data-word="${w}">${w.toUpperCase()} (${w.length})</span>`;
            }).join('') +
            '</div>';
    }

    // Debug section
    let debugHtml = '';
    if (debugVisible) {
        const debugSorted = [...allValidWords].sort((a, b) => (dictionary[b] || 0) - (dictionary[a] || 0));
        debugHtml = '<div class="word-list-title" style="margin-top:15px;">DEBUG — ALL VALID WORDS (' + debugSorted.length + ')</div><div class="word-list-items">' +
            debugSorted.map(w => {
                const freq = dictionary[w] || 0;
                return `<span class="debug-item">${w.toUpperCase()} (${w.length}) ⚡${freq}</span>`;
            }).join('') +
            '</div>';
    }

    const sortLabel = sortByLength ? 'Sort A→Z' : 'Sort by Length';
    wordListDiv.innerHTML = `<div class="word-list-header"><span class="word-list-title">WORDS</span><button class="sort-toggle-btn" id="sortToggle">${sortLabel}</button></div><div class="word-list-items">${realWordsHtml}</div>${bonusHtml}${debugHtml}`;
    document.getElementById('sortToggle').addEventListener('click', () => {
        sortByLength = !sortByLength;
        savePrefs();
        updateWordList();
    });
    attachTooltipListeners();

    // FLIP: animate items to new positions
    const flipEls = [];
    const newEls = [];
    wordListDiv.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        const newRect = el.getBoundingClientRect();
        if (oldPositions[key]) {
            const dx = oldPositions[key].left - newRect.left;
            const dy = oldPositions[key].top - newRect.top;
            if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
                el.style.transform = `translate(${dx}px, ${dy}px)`;
                flipEls.push(el);
            }
        } else {
            el.style.opacity = '0';
            el.style.transform = 'scale(0.85)';
            newEls.push(el);
        }
    });
    requestAnimationFrame(() => {
        for (const el of flipEls) {
            el.style.transition = 'transform 0.3s ease';
            el.style.transform = '';
        }
        for (const el of newEls) {
            el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            el.style.opacity = '1';
            el.style.transform = 'scale(1)';
        }
        const cleanup = () => {
            for (const el of [...flipEls, ...newEls]) {
                el.style.transition = '';
                el.style.transform = '';
                el.style.opacity = '';
            }
        };
        setTimeout(cleanup, 350);
    });

    // Pre-fetch definitions for unfound words when 1 away from level 3 threshold, or already at level 3
    const wordsNeededForLevel3 = Math.ceil(HINT_THRESHOLDS[2] * realWords.length) - foundRealWords.size;
    if (realWords.length > 0 && wordsNeededForLevel3 <= 1) {
        for (const word of realWords) {
            if (!foundRealWords.has(word) && definitionCache[word] === undefined) {
                fetchDefinition(word);
            }
        }
    }
}

function updateProgressBar() {
    const container = document.getElementById('progressContainer');
    const fill = document.getElementById('progressFill');
    const markers = document.getElementById('hintMarkers');
    const currentLabel = document.getElementById('progressCurrent');
    const totalLabel = document.getElementById('progressTotal');

    if (realWords.length === 0) {
        container.style.display = 'none';
        return;
    }

    container.style.display = 'block';
    const pct = (foundRealWords.size / realWords.length) * 100;
    fill.style.width = pct + '%';

    const pct100 = (foundRealWords.size / realWords.length);
    const thresholdIcons = [
        '★',
        '<span class="stars-2">★★</span>',
        '<span class="stars-3"><span class="stars-3-top">★</span><span class="stars-3-bottom">★★</span></span>'
    ];
    markers.innerHTML = HINT_THRESHOLDS.map((t, i) => {
        const reached = pct100 >= t;
        const markerLine = reached ? '' : `<div class="hint-marker" style="left:${t * 100}%"></div>`;
        return markerLine +
            `<div class="threshold-icon${reached ? ' reached' : ''}" style="left:${t * 100}%">${thresholdIcons[i]}</div>`;
    }).join('') +
        `<div class="threshold-icon gold${pct100 >= 1 ? ' reached' : ''}" style="left:100%">★</div>`;

    currentLabel.textContent = foundRealWords.size;
    totalLabel.textContent = realWords.length;
    totalLabel.style.visibility = pct > 95 ? 'hidden' : 'visible';

    // Persist progress for calendar display
    const dateKey = `${puzzleDate.getFullYear()}-${String(puzzleDate.getMonth() + 1).padStart(2, '0')}-${String(puzzleDate.getDate()).padStart(2, '0')}`;
    const allProgress = JSON.parse(localStorage.getItem('puzzleProgress') || '{}');
    allProgress[dateKey] = [foundRealWords.size, realWords.length];
    localStorage.setItem('puzzleProgress', JSON.stringify(allProgress));
}

if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
    debugBtn.style.display = '';
}
debugBtn.addEventListener('click', () => {
    debugVisible = !debugVisible;
    debugBtn.textContent = debugVisible ? 'Hide debug' : 'Debug';
    updateWordList();
});

// Calendar picker
(function initCalendar() {
    const dateDisplay = document.getElementById('puzzleDate');
    const overlay = document.getElementById('calendarOverlay');
    const monthYearLabel = document.getElementById('calendarMonthYear');
    const daysContainer = document.getElementById('calendarDays');
    const prevBtn = document.getElementById('calendarPrev');
    const nextBtn = document.getElementById('calendarNext');

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let viewMonth = puzzleDate.getMonth();
    let viewYear = puzzleDate.getFullYear();

    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'];

    dateDisplay.textContent = `${MONTHS[puzzleDate.getMonth()]} ${puzzleDate.getDate()}, ${puzzleDate.getFullYear()}`;

    dateDisplay.addEventListener('click', () => {
        renderCalendar();
        overlay.classList.toggle('visible');
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.classList.remove('visible');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') overlay.classList.remove('visible');
    });

    function renderCalendar() {
        monthYearLabel.textContent = `${MONTHS[viewMonth]} ${viewYear}`;
        daysContainer.innerHTML = '';

        const allProgress = JSON.parse(localStorage.getItem('puzzleProgress') || '{}');
        const firstDay = new Date(viewYear, viewMonth, 1).getDay();
        const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
            const empty = document.createElement('span');
            empty.className = 'calendar-day empty';
            daysContainer.appendChild(empty);
        }

        for (let d = 1; d <= daysInMonth; d++) {
            const dayDate = new Date(viewYear, viewMonth, d);
            dayDate.setHours(0, 0, 0, 0);
            const btn = document.createElement('button');
            btn.className = 'calendar-day';
            btn.textContent = d;

            const isDisabled = dayDate < GAME_START_DATE || dayDate > today;
            const isToday = dayDate.getTime() === today.getTime();
            const isSelected = dayDate.getTime() === puzzleDate.getTime();

            if (isDisabled) {
                btn.classList.add('disabled');
                btn.disabled = true;
            }
            if (isToday) btn.classList.add('today');
            if (isSelected) btn.classList.add('selected');

            // Progress ring
            const dateKey = `${viewYear}-${String(viewMonth + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
            const progress = allProgress[dateKey];
            if (progress && progress[0] > 0) {
                const pct = Math.round((progress[0] / progress[1]) * 100);
                btn.style.setProperty('--pct', pct + '%');
                btn.classList.add('has-progress');
                if (pct >= 100) btn.classList.add('complete');
            }

            if (!isDisabled) {
                btn.addEventListener('click', () => {
                    const yyyy = dayDate.getFullYear();
                    const mm = String(dayDate.getMonth() + 1).padStart(2, '0');
                    const dd = String(dayDate.getDate()).padStart(2, '0');
                    window.location.search = `?date=${yyyy}-${mm}-${dd}`;
                });
            }

            daysContainer.appendChild(btn);
        }
    }

    prevBtn.addEventListener('click', () => {
        viewMonth--;
        if (viewMonth < 0) { viewMonth = 11; viewYear--; }
        renderCalendar();
    });

    nextBtn.addEventListener('click', () => {
        viewMonth++;
        if (viewMonth > 11) { viewMonth = 0; viewYear++; }
        renderCalendar();
    });

    renderCalendar();
})();