/*
1. Write a function, AnimalTestUser, that has one string parameter,
username. It returns an object with a username property.
*/
var AnimalTestUser = function(username) {
  return { username: username };
};

var testSheep = AnimalTestUser('CottonBall');
console.log(testSheep);

/*
2.In your AnimalTestUser function, create a check that sees how many
arguments are passed. If there is more than one argument, create a property,
otherArgs that is an array of the remaining arguments. Note: the arguments
keyword is not a true array. Remember, it is an array-like object.
*/
var AnimalTestUser = function(username) {
  var args = arguments.length;
  var otherArgs = [];

  if (args > 1) {
    for (var i = 1; i < args; i++) {
      otherArgs.push(arguments[i]);
    }
  }
  return { username: username, otherArgs: otherArgs };
};

var testSheep = AnimalTestUser('CottonBall', { 'loves dancing': true }, [
  1,
  2,
  3
]);
console.log(testSheep);

/*
3.Write a constructor function, AnimalCreator that returns a single animal
object. The constructor function has 4 parameters: username, species, tagline,
and noises. The animal object should have at least 5 properties: username,
species, noises, tagline, and friends. The values should all be strings
except noises and friends, which are arrays.
*/
var AnimalCreator = function(username, species, tagline, noises) {
  return {
    username: username,
    species: species,
    tagline: tagline,
    noises: noises,
    friends: []
  };
};

// Test
var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', [
  'baahhh',
  'arrgg',
  'chewchewchew'
]);
console.log(sheep);

/*
4.Write a function, addFriend that takes an animal object (like the one returned
from the AnimalCreator function) and adds another animal object as a friend.
*/
var AnimalCreator = function(username, species, tagline, noises) {
  return {
    username: username,
    species: species,
    tagline: tagline,
    noises: noises,
    friends: []
  };
};

// Test
var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', [
  'baahhh',
  'arrgg',
  'chewchewchew'
]);
var cow = AnimalCreator('Moo', 'cow');

var addFriend = function(animal, friend) {
  animal.friends.push(friend);
  return animal;
};

// Test
addFriend(sheep, cow);
console.log(sheep);

/*
5.Change your addFriend function to only add the username of the friend, not the whole object.
*/
var AnimalCreator = function(username, species, tagline, noises) {
  return {
    username: username,
    species: species,
    tagline: tagline,
    noises: noises,
    friends: []
  };
};

var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', [
  'baahhh',
  'arrgg',
  'chewchewchew'
]);
var cow = AnimalCreator('Moo', 'cow');

var addFriend = function(animal, friend) {
  animal.friends.push(friend.username);
  return animal;
};

console.log(addFriend(sheep, cow));

/*
6.Create a myFarm collection of at least 3 animal objects. Give them some friends using addFriend, too!
*/
var AnimalCreator = function(username, species, tagline, noises) {
  return {
    username: username,
    species: species,
    tagline: tagline,
    noises: noises,
    friends: []
  };
};

var addFriend = function(animal, friend) {
  animal.friends.push(friend.username);
  return animal;
};

var myFarm = [];

var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', [
  'baah',
  'argg',
  'chewchew'
]);
var fox = AnimalCreator('Moi', 'fox', 'You cannot count on me!', [
  'ring',
  'ding',
  'ratata'
]);
var dog = AnimalCreator('Fefo', 'dog', 'At your service', [
  'woof',
  'bark',
  'chewchew'
]);

addFriend(sheep, fox);
addFriend(fox, dog);
addFriend(dog, sheep);

myFarm.push(sheep, fox, dog);

console.log(myFarm);

/*
7. Create a function, addMatchesArray, that takes a farm (array of animal objects) and
adds a new property to each animal object called matches that is an empty array. Hint: you will need a loop.
*/
function addMatchesArray(arr) {
  arr.forEach(function(arr) {
    arr.matches = [];
    return arr;
  });
}

addMatchesArray(myFarm);
console.log(myFarm[0]);

function addMatchesArray(arr) {
  arr.forEach(function(arr) {
    // you can also use for loop or for in
    arr.matches = [];
    return arr;
  });
}

addMatchesArray(myFarm);
/*
8.Create a function, giveMatches, that takes a farm collection (aka an array of animal objects)
that already has a matches property. It selects a name from the friends array and adds it to the matches array.
You can choose how the selection is made (random, the first element, etc). Make sure all your animal objects have friends.
*/
function giveMatches(arr) {
  arr.forEach(function(arr) {
    // you can also use for loop or for in
    arr.matches.push(arr.friends[0]);
    return arr;
  });
}

giveMatches(myFarm);
console.log(myFarm[0]);
