// Advanced Reduce: Common Mistakes

// 1
var data = [ 1, 2, 3, 4 ];
var reducer = (acc, val) => acc + val;

var sum = data.reduce(reducer);

// first item in your array is initial value ,if not provided
console.log(sum);

// 2
var data = [ 'vote1', 'vote', 'vote1', 'vote2' ];
var reducer = (acc, val) => {
  if (acc[val]) {
    acc[val] += 1;
  } else {
    acc[val] = 1;
  }
  return acc;
};

var tally = data.reduce(reducer, {});
console.log(tally);
/*
1. Always pass an initial value for your accumulator

2. Always remember to return an accumulator

*/
