// Advanced Reduce: Common Mistakes

/* NOTE:
    1. Always pass an initial value for your accumulator

    2. Always remember to return an accumulator
*/

// 1
let dataA = [1, 2, 3, 4];
let reducerA = (acc, val) => acc + val;

let sum = dataA.reduce(reducerA);

// first item in your array is initial value ,if not provided
sum; // => 10

// 2
let dataB = ['vote1', 'vote', 'vote1', 'vote2'];
let reducerB = (acc, val) => {
  if (acc[val]) {
    acc[val] += 1;
  } else {
    acc[val] = 1;
  }
  return acc;
};

let tally = dataB.reduce(reducerB, {});

tally; // => { vote1: 2, vote: 1, vote2: 1 }
