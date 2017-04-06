// Introducing Reduce: Reducing an Array into an Object

var votes = [
  'angular',
  'angular',
  'angular',
  'react',
  'react',
  'react',
  'react',
  'angular',
  'ember',
  'vue',
  'cycle',
  'Rx',
  'vanilla'
];

var result = votes.reduce(
  (prev, vote) => {
    if (!prev[vote]) {
      prev[vote] = 1;
    } else {
      prev[vote] += 1;
    }
    return prev;
  },
  {}
);

console.log(result);
