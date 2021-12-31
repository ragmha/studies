/*
Symmetric Difference
================================================================================

A function that takes two or more arrays and returns an array of the
symmetric difference (△ or ⊕) of the provided arrays.

*/

function sym() {
  const diff = (A, B) => new Set([...A].filter(n => !B.has(n)));

  const result = [...arguments]
    .map(arr => new Set(arr))
    .reduce((acc, set) => new Set([...diff(acc, set), ...diff(set, acc)]));

  return [...result].sort((a, b) => a - b);
}

module.exports = sym;
