// Use Concat to Add Values to an Array
// Array.prototype.concat()

// Basics
var items = [ 1, 2 ];

var newItems = items.concat(3);

console.log(newItems);

// Not limited to type
var items = [ 1, 2 ];

var newItems = items.concat(3, 'meow', undefined);

console.log(newItems);

// Takes other arrays
// (we end up getting a flatten array one value deep but not nested array )
var items = [ 1, 2 ];

var newItems = items.concat([ 3, 4 ], [ 5, 6, [ 7, 8 ], 'meow' ]);

console.log(newItems);

// Realistic
var people = [ { name: 'Raghib' }, { name: 'Meow' } ];

var people2 = [ { name: 'Simon' }, { name: 'Ben' } ];

//Awesome!
people.concat(people2).forEach(function(person) {
  console.log(person.name);
});
