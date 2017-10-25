let myArray = ["word", "cat", "dog", "coffee"];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; }

function randSwap(myArray) {
    let index1 = getRandomInt(0, myArray.length);
    let index2 = getRandomInt(0, 4);

    while (index1 == index2) {
        index2 = getRandomInt(0, 4);
    }

    let word1 = myArray[index1];
    let word2 = myArray[index2];

    myArray[index1] = word2;
    myArray[index2] = word1;

    return myArray;
    }


