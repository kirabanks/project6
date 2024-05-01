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
// Has to work on any array
function getRandomPhraseAsArray(arr) {
    // Randomly choose a phrase from "phrases" and associate with a number based on length.
    let randomNumber = Math.floor(Math.random() * arr.length);
    // Variable holding the random phrase and number
    let randomPhrase = arr[randomNumber];
    // Create a new array holding a string of each charcter of randomPhrase including spaces.
    const splitPhrase = randomPhrase.split("");
    // Returns the new array.
    return splitPhrase;
}

// Create an "addPhraseToDisplay" function that loops through an array of characters.
const phraseArray = getRandomPhraseAsArray(phrases);
const phraseLI = document.querySelector('ul');

function addPhraseToDisplay(arr) {
    // Write a loop that creates a li for each character.
    for (let i = 0; i < arr.length; i++) {
        const list = document.createElement('li');
        // Put Character inside of list item
        let text = arr[i];
        list.textContent = text;
        // Label if the character is a space or letter.
        if (text === ' ') {
             list.className = 'space';
        } else {
            list.className = 'letter';
        }
        // Append to the #phrase ul
        phraseLI.appendChild(list);
    }
}

addPhraseToDisplay(phraseArray);

// Create "checkLetter" function that runs on click.
function checkLetter(clicked) {
    // Variable storing all li elements with the class "letter"
    const letter = document.getElementsByClassName('letter');
    // Loop over letters to check if it matches the button chosen, if not return null.
    let match = null;
    for (let i = 0; i < letter.length; i++) {
        // If it's a match change the class to "show"
        if (letter[i].textContent.toLowerCase() === clicked.textContent) {
            letter[i].classList.add('show');
            match = letter.textContent;
        }
    }
    return match;
}

// Add an event listener to the keyboard
qwerty.addEventListener('click', (e) => {
    // If a player has chosen a letter it gets a "chosen" class and becomes disabled to choose it again.
    if (e.target.tagName === 'BUTTON') {
        e.target.className = 'chosen';
        e.target.disabled = 'true';
        // Pass to checkLetter function, and store in variable.
        const letterFound = checkLetter(e.target);
    }
});

