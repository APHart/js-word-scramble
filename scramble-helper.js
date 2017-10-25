// Create a function that reverses a word
function reverseWord(word) {
    let wordList = word.split("");
    wordList = wordList.reverse();
    let reversedWord = wordList.join("");
    return reversedWord;
}
// Create a function that takes an array of words and returns a new array of the
 // words with each word reversed.

let wordsArray = ['panda', 'sponge', 'bird', 'pickle']

 function revWordArray(wordsArray) {
    let newArray = [];

    for (let word of wordsArray) {
        let reversedWord = reverseWord(word);
        newArray.push(reversedWord);
    }

    return newArray;
 }

// Create a function that returns a random word from an array
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; }

function getRandWord(wordsArray) {
    let randomWord = wordsArray[getRandomInt(0, wordsArray.length)];
    return randomWord;
}
// Create an array of words and save it to a variable. Using your functions create
// a second array of reversed words.

let words = wordsArray;

let scramble = revWordArray(words);

// We could use the two arrays we've created to select a random word to show the user
// and check their guess. How could we do that? Is there a better way?


// ////////////////////////////////////////////////////////////////////////////

// Create a function that takes an array of words and returns a map with the keys
// as the reversed word and the values as the original word.

function wordScrambleGame(wordsArray) {

    let scrambleMap = new Map();

    for (let word of wordsArray) {
        scrambleMap.set(reverseWord(word), word);
    }

    return scrambleMap;
}

// Create a function that takes two strings, `guess` and `word` and a map, like
// the one you created above. If the first string is in the map, return the word
// if not, console log "Sorry, incorrect. The word was ..." and include word.

function wordGame(guess, scrambledWord, scrambleMap) {
    if (scrambleMap.get(scrambledWord) == guess) {
        console.log(`That was correct, the word is ${scrambleMap.get(scrambledWord)}.`);
    } else {
        console.log(`That was not correct, the word is actually ${scrambleMap.get(scrambledWord)}.`);
    }
}
// ////////////////////////////////////////////////////////////////////////////
// FURTHER STUDY

// Create a function that scrambles a word. Use whatever method you like to
// rearrange the letters.



// Create a function that takes an array of words and returns a map with the
// scrambled words as the keys and the original word as the values.
