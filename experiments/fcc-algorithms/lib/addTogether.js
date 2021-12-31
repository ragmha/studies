/*
Arguments Optional
===============================================================================

A function that sums two arguments together. If only one argument is
provided, then return a function that expects one argument and returns the sum.

*/

function addTogether() {
  const args = arguments;
  let [a, b] = args;

  if (Number.isInteger(a)) {
    if (!b) {
      return function(c) {
        if (Number.isInteger(c)) {
          return a + c;
        }
      };
    } else if (Number.isInteger(b)) {
      return a + b;
    }
  }
}

module.exports = addTogether;
