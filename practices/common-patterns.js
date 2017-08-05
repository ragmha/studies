// Introducing Reduce: Common Patterns

// reduce
let dataA = [1, 2, 3];
let double = dataA.reduce((acc, value) => {
  acc.push(value * 2);
  return acc;
}, []);

double; // => [ 2, 4, 6 ]

// map (same as above)
let doubleMapped = dataA.map(data => data * 2);

doubleMapped; // => [ 2, 4, 6 ]

//  reduce 2
let dataB = [1, 2, 3, 4, 5, 6];
let even = dataB.reduce((acc, value) => {
  if (value % 2 === 0) {
    acc.push(value);
  }
  return acc;
}, []);

even; // => [ 2, 4, 6 ]

// // Filter (same as above)
let dataC = [1, 2, 3, 4, 5, 6];
let evenFiltered = dataC.filter(d => d % 2 === 0);

evenFiltered; // => [2, 4, 6];

// // COMPOSE (FILTER AND MAP)
let dataD = [1, 2, 3, 4, 5, 6];
let FilteredMap = dataD.filter(d => d % 2 === 0).map(d => d * 2);

FilteredMap; // => [ 4, 8, 12 ]

// What if
let bigData = [];
for (let i = 0; i < 1000000; i++) {
  bigData[i] = i;
}

console.time('bigData');
let FilteredbigDataMap = bigData.filter(d => d % 2 === 0).map(d => d * 2);
console.timeEnd('bigData'); // => bigData: 213.775ms

console.time('bigDataReduce');
let ReducedbigData = bigData.reduce((acc, val) => {
  if (val % 2 === 0) {
    acc.push(val * 2);
  }
  return acc;
}, []);
console.timeEnd('bigDataReduce'); // => bigDataReduce: 63.683ms

// For complex stuff check on the number of operation
