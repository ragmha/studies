// Advanced Reduce: Composing Functions with Reduce

var increment = input => ++input;
var decrement = input => --input;
var double = input => input * 2;
var halve = input => input / 2;

var initalValue = 10;

var pipeLine = [ increment, double, decrement ];

var finalVal = pipeLine.reduce(
  (acc, fn) => {
    console.log('FN', fn);
    console.log('acc', acc);
    return fn(acc);
  },
  initalValue
);

console.log(finalVal);
