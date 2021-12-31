// Flattening

function flattening(array) {
  return array.reduce((flat, current) => flat.concat(current), []);
}

let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(flattening(arrays)); // → [1, 2, 3, 4, 5, 6]
