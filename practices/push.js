// Add Elements onto an Array with Push
// Array.prototype.push();

// Basics
const pets = ['Cat', 'Dog'];
pets.push('Whale');
pets; // => [ 'Cat', 'Dog', 'Whale' ]

// Basics (Can take multiple args)
const pets1 = ['Cat', 'Dog'];
pets1.push('Whale', 'Horse');
pets1; // => [ 'Cat', 'Dog', 'Whale', 'Horse' ]

// Merging 2 arrays together (Can take multiple args)
const pets2 = ['Cat', 'Dog'];
const wishList = ['Spider', 'Giraffe'];
pets2.push.apply(pets2, wishList);// similar to pets2.push('Spider', 'Giraffe')
pets2; // => [ 'Cat', 'Dog', 'Spider', 'Giraffe' ]
