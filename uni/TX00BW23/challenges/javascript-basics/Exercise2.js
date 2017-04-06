// Exercise 2

/*
Print (console.log()) two lottery rows for next weekend’s Lottery. This is your
first version – no need to check if there is same number twice, no need arrange
numbers in ascending order
*/

function lottery() {
    let result = "";
    for(let i = 0; i < 7; i++) {
        result += Math.floor(Math.random()* 35 + 1) + " ";
    }
    console.log(result);
}

// Printing 2 lottery rows
for(let i = 0; i < 2; i++) {
    lottery();
}
// => 6 33 6 34 22 15 33 25
// => 6 15 30 31 10 33 27 8
