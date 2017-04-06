// Add Elements onto an Array with Push
// Array.prototype.push();

// Basics
const pets = [ 'Cat', 'Dog' ];
pets.push('Whale');
console.log(pets);

// Basics (Can take multiple args)
const pets1 = [ 'Cat', 'Dog' ];
pets1.push('Whale', 'Horse');
console.log(pets1);

// Merging 2 arrays together (Can take multiple args)
const pets2 = [ 'Cat', 'Dog' ];
const wishList = [ 'Spider', 'Giraffe' ];
pets2.push.apply(pets2, wishList);
// similar to pets2.push('Spider', 'Giraffe')
console.log(pets2);
