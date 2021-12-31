// Introducing Reduce: Reducing an Array into an Object

const votes = [
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
  'vanilla',
];

let result = votes.reduce((prev, vote) => {
  if (!prev[vote]) {
    prev[vote] = 1;
  } else {
    prev[vote] += 1;
  }
  return prev;
}, {});

result; /* => 
    { angular: 4,
    react: 4,
    ember: 1,
    vue: 1,
    cycle: 1,
    Rx: 1,
    vanilla: 1 }
*/
