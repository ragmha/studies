/*
Chunky Monkey
=====================================================================
- Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

- Remember to use Read-Search-Ask if you get stuck. Write your own code.

- Here are some helpful links:

* Array.prototype.push()

* Array.prototype.slice()
*/

const chunkArrayInGroups = (arr, size) => {
	let group = [];
	let position = 0;

	while (position < arr.length) {
		group.push(arr.slice(position, (position += size)));
	}
	return group;
};

// TEST
chunkArrayInGroups(['a', 'b', 'c', 'd'], 2); // =>  [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3); // =>  [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2); // =>  [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4); // =>  [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3); // =>  [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); // =>  [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2); // =>  [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
