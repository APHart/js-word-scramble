let candy = new Map([
                    ['red', 'cherry'],
                    ['purple', 'grape'],
                    ['orange', 'mandarin'],
                    ['yellow', 'banana'],
                    ['green', 'kiwi']
                    ]);

// for (let i of candy) {
//     console.log(`The ${i[1]} flavor is colored ${i[0]}.`);
// }

function candyThings(color, candy) {
    if (candy.has(color)) {
        console.log(candy.get(color));
    } else {
        console.log("Sorry, that color doesn't have a flavor.");
    }
}

candyThings('orange', candy);