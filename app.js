const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
// Set player misses to 0.
let missed = 0;

// Array that holds the phrases.
const phrases = ["cut to the chase", "busy bee", "close but no cigar", "ugly duckling", "burst your bubble"];

// Hides the start screen overlay when button is clicked.
const startButton = document.querySelector('.btn__reset');
startButton.addEventListener('click', () => {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
});

// Function that chooses a random phrase, splits the phrase into a new array of characters, and returns the phrase into a new array.
function getRandomPhraseAsArray(arr) {
    // Randomly choose a phrase and associate it with a number based on length.
    let randomNumber = Math.floor(Math.random() * arr.length);
    // Variable holding the random phrase and number
    let randomPhrase = arr[randomNumber];
    // Array holding a string of each charcter including spaces.
    const splitPhrase = randomPhrase.split("");
    // Returns the new array.
    return splitPhrase;
}

// Function that loops through the array of characters.
const phraseArray = getRandomPhraseAsArray(phrases);
const phraseLI = document.querySelector('ul');

function addPhraseToDisplay(arr) {
    // Loop that creates a list item for each character.
    for (let i = 0; i < arr.length; i++) {
        const list = document.createElement('li');
        // Puts character inside of list item
        let text = arr[i];
        list.textContent = text;
        // Label if the character is a space or letter.
        if (text === ' ') {
             list.className = 'space';
        } else {
            list.className = 'letter';
        }
        // Append to the overall list.
        phraseLI.appendChild(list);
    }
}

addPhraseToDisplay(phraseArray);

// Function that checks the letter on click.
function checkLetter(clicked) {
    // Variable storing all li elements with the class "letter"
    const letterChecked = document.getElementsByClassName('letter');
    // Loop over letters to check if it matches the button chosen, if not return null.
    let match = null;
    for (let i = 0; i < letterChecked.length; i++) {
        // If it's a match change the class to "show"
        if (letterChecked[i].textContent.toLowerCase() === clicked.textContent) {
            letterChecked[i].classList.add('show');
            match = letterChecked.textContent;
        }
    }
    return match;
}


// Add an event listener to the on screen keyboard.
qwerty.addEventListener('click', (e) => {
    // If a player has chosen a letter it gets a "chosen" class and becomes disabled to choose it again.
    if (e.target.tagName === 'BUTTON') {
        e.target.className = 'chosen';
        e.target.disabled = 'true';
        // Pass to checkLetter function, and store in variable.
        const letterFound = checkLetter(e.target);
        // Check if the value of letter is null
        if (letterFound === null) {
            // Remove heart from scoreboard and increase misses
            missed ++;
            const lives = document.querySelectorAll('img');
            lives[missed -1].src = 'images/lostHeart2.png';
        }
    }
    // Runs the function to check if player won after each guess.
    checkWin();
});

// Function that checks whether the game has been won or lost.
function checkWin() {

    const letter = document.getElementsByClassName('letter');
    const show = document.getElementsByClassName('show');

    // Check if the number of letters with class "show" equals class "letter"
    if (letter.length === show.length) {
        // If equal, show win overlay
        overlay.classList.add('win');
        overlay.style.display = 'flex';
        document.querySelector('#overlay .title').textContent = 'You win!';
        document.querySelector('.btn__reset').textContent = 'Play Again';
    } else if (missed > 4) {
        // Checks if the number of misses is equal to or greater than 5. If so, shows lose overlay.
        overlay.classList.add('lose');
        overlay.style.display = 'flex';
        document.querySelector('#overlay .title').textContent = 'You died...';
        document.querySelector('.btn__reset').textContent = 'Try Again';
    }

    // Resets game to play again.
    startButton.addEventListener('click', () => {
        window.location.reload();
    });
}

