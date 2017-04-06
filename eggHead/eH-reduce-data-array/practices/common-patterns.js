// Introducing Reduce: Common Patterns
//
// reduce
// var data = [1, 2, 3];
// var double = data.reduce((acc, value) => { acc.push(value * 2); return acc;} ,[]);
// console.log(double);

// // map (same as above)
// var doubleMapped = data.map(data => data * 2);
// console.log(doubleMapped);

// // reduce 2
// var data = [1, 2, 3, 4, 5, 6];
// var even = data.reduce((acc, value) => {
//   if (value%2 === 0) {
//     acc.push(value);
//   }
//   return acc;
// }, []);
// console.log(even);

// // Filter (same as above)
// var data = [1, 2, 3, 4, 5, 6];
// var evenFiltered = data.filter(d => d%2 === 0);
//
// console.log(evenFiltered);

// // COMPOSE (FILTER AND MAP)
// var data = [1, 2, 3, 4, 5, 6];
// var FilteredMap = data
//                     .filter(d => d%2 === 0)
//                     .map(d => d * 2);
//
// console.log(FilteredMap);

// What if
var bigData = [];
for (var i = 0; i < 1000000; i++) {
  bigData[i] = i;
}

console.time('bigData');
var FilteredbigDataMap = bigData
  .filter(d => d % 2 === 0)
  .map(d => d * 2);
console.timeEnd('bigData');

console.time('bigDataReduce');
var ReducedbigData = bigData.reduce(
  (acc, val) => {
    if (val % 2 === 0) {
      acc.push(val * 2);
    }
    return acc;
  },
  []
);
console.timeEnd('bigDataReduce');
// For complex stuff check on the number of operation
