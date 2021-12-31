/*
Diff Two Arrays
=====================================================================

- Compare two arrays and return a new array with any items only found in one of
the two given arrays, but not both. In other words, return the symmetric
difference of the two arrays.

- Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write
your own code.

- Here are some helpful links:

  * Comparison Operators
  * Array.prototype.slice()
  * Array.prototype.filter()
  * Array.prototype.indexOf()
  * Array.prototype.concat()

*/

const diffArray = (arr1, arr2) => arr1.filter(e => arr2.indexOf(e) === -1);

// TEST
diffArray(
	['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
	['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
); // => ["pink wool"].
diffArray(
	['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
	['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
); // => ["diorite", "pink wool"].
diffArray(
	['andesite', 'grass', 'dirt', 'dead shrub'],
	['andesite', 'grass', 'dirt', 'dead shrub']
); // => [].
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // => [4].
diffArray([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]); // => ["piglet", 4].
diffArray([], ['snuffleupagus', 'cookie monster', 'elmo']); // => ["snuffleupagus", "cookie monster", "elmo"].
diffArray([1, 'calf', 3, 'piglet'], [7, 'filly']); // => [1, "calf", 3, "piglet", 7, "filly"].
