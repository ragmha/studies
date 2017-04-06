//Create a variable called noiseArray and assign it to an array literal. Place at least one element in the array.
var noiseArray = [ 'meooow' ];

//Add a noise to the beginning of the noiseArray.
noiseArray.unshift('Woof');

//Add another noise to the end of the noiseArray.
noiseArray.push('rawr');

//Using Bracket Notation,add another noise to the end.
noiseArray[3] = 'awooo';

// Inspect the noiseArray
console.log(noiseArray);

// What is the length?
console.log(noiseArray.length);

// What is the last index? How is it different than the length?
console.log(noiseArray[noiseArray.length - 1]);

//Inspect your handiwork! What does it look like?
//Put the noiseArray inside the animal object on the noises property
animal.noises = noiseArray;

// overrides/assign
// Result
console.log(animal);

//=============================================================
//Animal Collection
var animals = [];

//Object [From Previous]
var animal = {};

animal.username = 'Tom';

animal['tagline'] = 'coolio';

var noises = [];

animal.noises = noises;

animals.push(animal);

var quackers = {
  username: 'DaffyDuck',
  tagline: 'Yippeee!',
  noises: [ 'quack', 'honk', 'sneeze', 'growl' ]
};

animals[animals.length] = quackers;

// similar to array.push()
console.log(animals);

var dog = {
  username: 'Mio',
  tagline: 'Feed me!',
  noises: [ 'furr', 'bark', 'yolo' ]
};

var fish = {};
fish.username = 'Nemo', fish.tagline = 'Find me!', fish.noises = [
  'meoza',
  'bark',
  'yolo'
];

animals.push(dog, fish);

console.log(animals.length);
