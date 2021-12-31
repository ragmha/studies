// Advanced Reduce: Composing Functions with Reduce

let increment = input => ++input;
let decrement = input => --input;
let double = input => input * 2;
let halve = input => input / 2;

let initalValue = 10;

let pipeLine = [increment, double, decrement];

let finalVal = pipeLine.reduce((acc, fn) => {
  console.log('FN', fn);
  console.log('acc', acc);
  return fn(acc);
}, initalValue);

finalVal; /* => 
    FN input => ++input
    acc 10
    FN input => input * 2
    acc 11
    FN input => --input
    acc 22
    21
*/
