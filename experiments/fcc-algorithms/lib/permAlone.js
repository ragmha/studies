/*
No repeats please
================================================================================

- Return the number of total permutations of the provided string that don't have
repeated consecutive letters. Assume that all characters in the provided string
are each unique.

- For example, aab should return 2 because it has 6 total permutations (aab, aab,
aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter
(in this case a) repeating.

- Remember to use Read-Search-Ask if you get stuck. Try to pair program.
Write your own code.

- Here are some helpful links:

  * Permutations
  * RegExp
*/

const permAlone = str => {
	let permutations = [];
	let tmp;
	let arr = str.split('');
	const regex = /(.)\1+/g;

	if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;

	const swap = (a, b) => {
		tmp = arr[a];
		arr[a] = arr[b];
		arr[b] = tmp;
	};

	const generate = int => {
		if (int === 1) {
			permutations.push(arr.join(''));
		} else {
			for (let i = 0; i != int; ++i) {
				generate(int - 1);
				swap(int % 2 ? 0 : i, int - 1);
			}
		}
	};

	generate(arr.length);

	let result = permutations.filter(str => !str.match(regex));

	return result.length;
};

// TEST
permAlone('aab'); // => 2
permAlone('aaa'); // => 0
permAlone('aabb'); // => 8
permAlone('abcdefa'); // => 3600
permAlone('abfdefa'); // => 2640
permAlone('zzzzzzzz'); // => 0
permAlone('a'); // => 1
permAlone('aaab'); // => 0
permAlone('aaabb'); // => 12
