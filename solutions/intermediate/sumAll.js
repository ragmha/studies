/*
Sum All Numbers in a Range
=====================================================================

- We'll pass you an array of two numbers. Return the sum of those two numbers and
 all numbers between them.

- The lowest number will not always come first.

- Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

- Here are some helpful links:

  * Math.max()
  * Math.min()
  * Array.prototype.reduce()
*/

/*
// solution 1

const sumFrom = (min, max) => (max-min + 1) * (min+max) / 2;

const sumAll = arr => sumFrom(Math.min(...arr), Math.max(...arr));
*/

/*
// solution 2

const sumAll = arr =>
     arr
        .sort((a, b) => a -b)
        .reduce((a, b) => (a + b) * (b - a + 1) / 2)
*/

const sumAll = arr => {
	let sum = 0;
	for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
		sum += i;
	}
	return sum;
};

// TEST
sumAll([1, 4]); // => 10.
sumAll([4, 1]); // => 10.
sumAll([5, 10]); // => 45.
sumAll([10, 5]); // => 45.
