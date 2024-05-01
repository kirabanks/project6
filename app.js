// Get Element ID "qwerty"
const qwerty = document.getElementById('qwerty');

// Get Element ID "phrase"
const phrase = document.getElementById('phrase');

// Create a "missed" variable, initialized to 0.
const missed = 0;

// Create a "phrases" array.
const phrases = ["cut to the chase", "busy bee", "close but no cigar", "ugly duckling", "burst your bubble"];

// Hide the Start Screen Overlay with start button
const startButton = document.querySelector('.btn__reset');
startButton.addEventListener('click', () => {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
});

// Create a "getRandomPhraseAsArray" function that chooses a random phrase, splits the phrase into a new array of characters, and returns the phrase into a new array.
function getRandomPhraseAsArray() {
    // Randomly choose a phrase from "phrases"
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    // Variable holding the length of the selected phrase.
    const phraseLength = randomPhrase.length;
    // Create a new array holding a string of each charcter of randomPhrase including spaces.
    const newPhraseArray = randomPhrase.split("");
    // Returns the new array.
    return newPhraseArray;
}


// Testing
console.log(getRandomPhraseAsArray());
