// Introducing Reduce: Transforming Arrays Functionally

let data = [15, 3, 20];

// runs depending on the length on array
let reducer = (accumulator, item) => accumulator + item;

let initalValue = 0;

let total = data.reduce(reducer, initalValue);

// returns the final value of the accumulator
console.log('The sum is', total);
