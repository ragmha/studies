/*
Symmetric Difference
================================================================================

- Create a function that takes two or more arrays and returns an array of the
symmetric difference (△ or ⊕) of the provided arrays.

- Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the
mathematical term "symmetric difference" of two sets is the set of elements
which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For
every additional symmetric difference you take (say on a set D = {2, 3}), you
should get the set with elements which are in either of the two the sets but not
both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

- Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write
your own code.

- Here are some helpful links:
  * Array.prototype.reduce()
  * Symmetric Difference
*/

function sym() {
	const diff = (A, B) => new Set([...A].filter(n => !B.has(n)));

	const result = [...arguments]
		.map(arr => new Set(arr))
		.reduce((acc, set) => new Set([...diff(acc, set), ...diff(set, acc)]));

	return [...result].sort((a, b) => a - b);
}

// TEST
sym([1, 2, 3], [5, 2, 1, 4]); // => [3, 4, 5].
sym([1, 2, 3], [5, 2, 1, 4]); // => should contain only three elements.
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]); // => [1, 4, 5]
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]); // => should contain only three elements.
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]); // => [1, 4, 5].
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]); // => should contain only three elements.
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]); // => [2, 3, 4, 6, 7].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]); // => should contain only five elements.
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]); // => [1, 2, 4, 5, 6, 7, 8, 9].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]); // => should contain only eight elements.
