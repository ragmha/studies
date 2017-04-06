// Introducing Reduce: Transforming Arrays Functionally

var data = [ 15, 3, 20 ];

var reducer = function(accumulator, item) {
  // runs depending on the length on array
  return accumulator + item;
};

var initalValue = 0;

var total = data.reduce(reducer, initalValue);

// returns the final value of the accumulator
console.log('The sum is', total);
