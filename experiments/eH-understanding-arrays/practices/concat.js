// Use Concat to Add Values to an Array
// Array.prototype.concat()

// Basics
let itemsA = [1, 2];

let newItemsA = itemsA.concat(3);

newItemsA; // => [ 1, 2, 3 ]

// Not limited to type
let itemsB = [1, 2];

let newItemsB = items.concat(3, 'meow', undefined);

newItemsB; // => [ 1, 2, 3, 'meow', undefined ]

// Takes other arrays
// (we end up getting a flatten array one value deep but not nested array )
let itemsC = [1, 2];

let newItemsC = itemsC.concat([3, 4], [5, 6, [7, 8], 'meow']);

newItemsC; // => [ 1, 2, 3, 4, 5, 6, [ 7, 8 ], 'meow' ]

// Realistic
let people = [
  {
    name: 'Raghib',
  },
  {
    name: 'Meow',
  },
];

let people2 = [
  {
    name: 'Simon',
  },
  {
    name: 'Ben',
  },
];

//Awesome!
people
  .concat(people2)
  .forEach(person => console.log(person.name)); /* => Raghib
Meow
Simon
Ben 
*/
