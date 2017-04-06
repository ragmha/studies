/*
Description:

Basics - Generators #1

Generators are very useful things in programming, in this series we will learn how to use generators and see how we can apply generators to common programming challenges.
Task

You must complete the generator function that must increment a counter by 1 each time also if a argument is supplied (will always be a number) you must then change the counter to that number.
Important

The counter must start at 1 when the generator is initalized
More Info: Iterators and Generators

*/

// My solution
function* generator(x = 1) {
  while (true) {
    x = (yield x++) || x;
  }
}

// Test
const gen = generator();
gen.next().value;
// => 1
gen.next().value;
// => 2
gen.next().value;
// => 3
gen.next().value;
// => 4
gen.next().value;
// => 5
gen.next(10).value; // => 10
//------------------------------------------------------------------//
/*
# Best practice

function* generator() {
  let i = 1;
  while (true) {
    let v = yield i++;
    if (v !== undefined) i = v;
  }
}
*/
//------------------------------------------------------------------//
