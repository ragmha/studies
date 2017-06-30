/*
Steamroller
===============================================================================

- Flatten a nested array. You must account for varying levels of nesting.

- Remember to use Read-Search-Ask if you get stuck. Try to pair program.
Write your own code.

- Here are some helpful links:

  * Array.isArray()
*/

const steamrollArray = arr =>
	arr.reduce(
		(prev, curr) =>
			prev.concat(Array.isArray(curr) ? steamrollArray(curr) : curr),
		[]
	);

// TEST
steamrollArray([[['a']], [['b']]]); // => ["a", "b"]
steamrollArray([1, [2], [3, [[4]]]]); // => [1, 2, 3, 4]
steamrollArray([1, [], [3, [[4]]]]); // => [1, 3, 4]
steamrollArray([1, {}, [3, [[4]]]]); // => [1, {}, 3, 4]
