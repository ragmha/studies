/*
 Slasher Flick
 =====================================================================
- Return the remaining elements of an array after chopping off n elements from the head.

- The head means the beginning of the array, or the zeroth index.

- Remember to use Read-Search-Ask if you get stuck. Write your own code.

- Here are some helpful links:
  * Array.prototype.slice()
  * Array.prototype.splice()
*/

const slasher = (arr, howMany) => arr.slice(howMany);

// TEST
slasher([1, 2, 3], 2); //=> [3].
slasher([1, 2, 3], 0); //=> [1, 2, 3].
slasher([1, 2, 3], 9); //=> [].
slasher([1, 2, 3], 4); //=> [].
slasher(['burgers', 'fries', 'shake'], 1); //=> ["fries", "shake"].
slasher([1, 2, 'chicken', 3, 'potatoes', 'cheese', 4], 5); //=> ["cheese", 4].
