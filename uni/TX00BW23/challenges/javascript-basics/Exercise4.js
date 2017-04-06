// Exercise 4

/*
Modify your lottery script to use arrays.

Your function should:
1. create an array
2. add 7 random numbers into your array
3. sort array in ascending order
4. return the array

Code outside function:
1. call function as many times as user asks
2. print lottery rows to console
*/

function lottery() {
    let result = [];
    for(let i = 0; i < 7; i++) {
        result.push(Math.floor(Math.random()* 35 + 1));
    }
    result.sort();
    return result;
}

function run() {
    let number = prompt("Give me a number");
    for(let i = 0; i < number; i++) {
        console.log(lottery().toString());
    }
};
