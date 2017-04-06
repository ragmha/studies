// Exercise 3

/*
Modify your lottery script:

1. User will be prompted how many lottery rows she would like to have
2. Create a function that returns a single row of numbers when you call it one
time (prompt tells how many user wants)
3. Call your function as many times as needed and print the rows in console

(This is your second version – still no need to check if there is same number
twice, no need arrange numbers in ascending order)
*/

function lottery() {
    let result = "";
    for(let i = 0; i < 7; i++) {
        result += Math.floor(Math.random()* 35 + 1) + " ";
    }
    console.log(result);
}

function run() {
    let number = prompt("Give me a number");
    for(let i = 0; i < number; i++) {
        lottery();
    }
};

// Test
run(); /*  Enter 3 =>
16 14 29 30 14 32 32
6 15 10 32 15 23 29 30
6 35 28 34 24 10 4 33
*/
