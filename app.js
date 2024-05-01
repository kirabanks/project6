// Get Element ID "qwerty"
const qwerty = document.getElementById('qwerty');

// Get Element ID "phrase"
const phrase = document.getElementById('phrase');

// Create a "missed" variable, initialized to 0.
const missed = 0;

// Create a "phrases" array.
// Populate with 5 different phrases as strings
const phrases = ["cut to the chase", "busy bee", "close but no cigar", "ugly duckling", "burst your bubble"];

// Hide the Start Screen Overlay
// Attach an event listener to the “Start Game” button to hide the start screen overlay when clicked. Clicking the button should now make the on-screen keyboard visible.
const startButton = document.querySelector('.btn__reset');
startButton.addEventListener('click', () => {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
});

// Testing
console.log(phrases);