/*
Inventory Update
================================================================================

- Compare and update the inventory stored in a 2D array against a second 2D array
of a fresh delivery. Update the current existing inventory item quantities (in arr1).
If an item cannot be found, add the new item and quantity into the inventory array.
The returned inventory array should be in alphabetical order by item.

- Remember to use Read-Search-Ask if you get stuck. Try to pair program.
Write your own code.

- Here are some helpful links:

  * Global Array Object
*/

const updateInventory = (arr1, arr2) => {
	arr2.forEach((elem, idx) => {
		let x = arr1.map(elem => elem[1]).indexOf(elem[1]);

		if (x === -1) {
			arr1.push(elem);
		} else {
			arr1[x][0] += elem[0];
		}
	});

	return arr1.sort((a, b) => a[1] > b[1]);
};

// TEST
updateInventory(
	[[21, 'Bowling Ball'], [2, 'Dirty Sock'], [1, 'Hair Pin'], [5, 'Microphone']],
	[
		[2, 'Hair Pin'],
		[3, 'Half-Eaten Apple'],
		[67, 'Bowling Ball'],
		[7, 'Toothpaste']
	]
).length; // => an array with a length of 6.
updateInventory(
	[[21, 'Bowling Ball'], [2, 'Dirty Sock'], [1, 'Hair Pin'], [5, 'Microphone']],
	[
		[2, 'Hair Pin'],
		[3, 'Half-Eaten Apple'],
		[67, 'Bowling Ball'],
		[7, 'Toothpaste']
	]
); // => [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].
updateInventory(
	[[21, 'Bowling Ball'], [2, 'Dirty Sock'], [1, 'Hair Pin'], [5, 'Microphone']],
	[]
); // => [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].
updateInventory(
	[],
	[
		[2, 'Hair Pin'],
		[3, 'Half-Eaten Apple'],
		[67, 'Bowling Ball'],
		[7, 'Toothpaste']
	]
); // => [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].

updateInventory(
	[[0, 'Bowling Ball'], [0, 'Dirty Sock'], [0, 'Hair Pin'], [0, 'Microphone']],
	[
		[1, 'Hair Pin'],
		[1, 'Half-Eaten Apple'],
		[1, 'Bowling Ball'],
		[1, 'Toothpaste']
	]
);
// => [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].
