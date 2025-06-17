import { wordBank } from "./WordBank.js";

let randomWord = Math.floor((Math.random() * (wordBank.length - 1)) + 1);
let chosenWord = wordBank[randomWord];
let wordReveal = chosenWord;
let blankWord = "";
let numChances = 10;
let gameRunning = true;
let keysPressed = "";
let doubleKeyPress = false;

// display dashes for not fully guessed letters
for (let i = 0; i < chosenWord.length; i++) {
    if (chosenWord[i] === " ") {
        blankWord = blankWord + " ";
    } else {
        blankWord = blankWord + "-";
    }
}

// display word guessed so far
let hiddenword = document.querySelector(".hiddenWord");
hiddenword.innerHTML = blankWord;

// show user their remainng guesses
let chancesDisplay = document.querySelector(".playerChances");
chancesDisplay.innerHTML = "you have : " + numChances + " chances left.";

// letters guessed so far
let lettersGuested = document.querySelector(".lettersGuest");

// Select all buttons on the page
const buttons = document.querySelectorAll("button");
// Loop through each button and attach a click event listener
buttons.forEach(button => {
    button.addEventListener("click", function () {
        let key = this.innerHTML.toLowerCase();
        // if key pressed is not in our bank of pressed keys add it
        if (!keysPressed.includes(key)) {
            keysPressed = keysPressed + key;
        } else {
            // if already guessed by pass negative score count
            doubleKeyPress = true;
        }

        lettersGuested.innerHTML = keysPressed;

        if (gameRunning) {
            // if key pressed is on current word
            if (chosenWord.indexOf(key) >= 0) {
                // display to user that they have guessed correctly
                while (chosenWord.indexOf(key) >= 0) {
                    blankWord = replaceIndex(key, blankWord, chosenWord, chosenWord[chosenWord.indexOf(key)]);
                    chosenWord = replaceIndex(key, chosenWord, chosenWord, "-");
                }
            }
            // if letter is not in the word and has not already been used and key pressed is a letter, subtract from score
            if (blankWord.indexOf(key) < 0 && !doubleKeyPress) {
                numChances -= 1;
            }
            chancesDisplay.innerHTML = "you have : " + numChances + " chances left.";
            hiddenword.innerHTML = blankWord;
            if (numChances <= 0) { hiddenword.innerHTML = wordReveal + " Game Over!"; gameRunning = false; }
            if (blankWord.includes("-") === false) { hiddenword.innerHTML = blankWord + " You Win!"; gameRunning = false; }
            doubleKeyPress = false;

            if (numChances === 9) {
                changeImage('./assets/Miss1.png');
            } else if (numChances === 8) {
                changeImage('./assets/Miss2.png');
            } else if (numChances === 7) {
                changeImage('./assets/Miss3.png');
            } else if (numChances === 6) {
                changeImage('./assets/Miss4.png');
            } else if (numChances === 5) {
                changeImage('./assets/Miss5.png');
            } else if (numChances === 4) {
                changeImage('./assets/Miss6.png');
            } else if (numChances === 3) {
                changeImage('./assets/Miss7.png');
            } else if (numChances === 2) {
                changeImage('./assets/Miss8.png');
            } else if (numChances === 1) {
                changeImage('./assets/Miss9.png');
            } else if (numChances === 0) {
                changeImage('./assets/GameOver.png');
            }
        }
    });
});

// helper replace letter at index
function replaceIndex(index, string, word, replacement) {
    string = string.slice(0, word.indexOf(index)) + replacement + string.slice(word.indexOf(index) + 1, string.length);
    return string;
}

// helper for changing hang man image
function changeImage(img) {
    document.getElementById("hangmanStatus").src = img;
}





























