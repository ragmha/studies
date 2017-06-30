/*
Smallest Common Multiple
================================================================================
- Find the smallest common multiple of the provided parameters that can be evenly
divided by both, as well as by all sequential numbers in the range between these parameters.

- The range will be an array of two numbers that will not necessarily be in numerical order.

- e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is
evenly divisible by all numbers between 1 and 3.

- Remember to use Read-Search-Ask if you get stuck. Try to pair program.
Write your own code.

- Here are some helpful links:

 * Smallest Common Multiple
*/

const range = arr => {
	let newArr = [];
	for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
		newArr.push(i);
	}
	return newArr;
};

const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));

const smallestCommons = arr =>
	range(arr).reduce((prev, current) => prev * current / gcd(prev, current));

// TEST
smallestCommons([1, 5]); // => 60
smallestCommons([5, 1]); // => 60
smallestCommons([1, 13]); // => 360360
smallestCommons([23, 18]); // => 6056820
