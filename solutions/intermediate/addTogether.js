/*
Arguments Optional
===============================================================================

- Create a function that sums two arguments together. If only one argument is
provided, then return a function that expects one argument and returns the sum.

- For example, addTogether(2, 3) should return 5, and addTogether(2) should
return a function.

- Calling this returned function with a single argument will then return the sum:

- var sumTwoAnd = addTogether(2);

- sumTwoAnd(3) returns 5.

- If either argument isn't a valid number, return undefined.

- Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

- Here are some helpful links:

  * Closures
  * Arguments object
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

// TEST
addTogether(2, 3); // => 5
addTogether(2)(3); // => 5
addTogether('http://bitly/IqT6zt'); // => undefined
addTogether(2, '3'); // => undefined
addTogether(2)([3]); // => undefined
