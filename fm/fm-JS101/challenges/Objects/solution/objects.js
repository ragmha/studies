//Object
var animal = {};

animal.username = 'Tom';

animal['tagline'] = 'coolio';

var noises = [];

animal.noises = noises;

console.log(animal);

//Loops
var count = 0;
for (var key in animal) {
  count++;
  if (key === 'username') {
    //key = "username"
    console.log('Hi my name is ' + animal[key]);
  } else if (key === 'tagline') {
    //key = "tagline"
    console.log("I'd like to say " + animal[key]);
  }
}
/*
What happens if you return 'Hi my name is ' + ___ instead of using console.log() inside the loop?

The loop ends after first iteration, since there is no return.

*/
/* Review
1) dot & bracket notation
2) bracket notation
3) bracket notation
*/
