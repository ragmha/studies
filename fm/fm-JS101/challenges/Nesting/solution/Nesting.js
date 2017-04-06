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

var animals = myFarm;

// Create a FriendList
var friends = [];

friends.push(animals[0].username, animals[1].username);

console.log(friends);

// Create a Relationships object
var relationships = {};

relationships.friends = friends;

console.log(Object.keys(relationships).length);

var matches = [];

relationships.matches = matches;

console.log(relationships);

relationships.matches.push(animals[0].username);

console.log(relationships);

/*
for (var i = 0; i < animals.length; i++) {
   animals[i].relationships = relationships;
}
*/
animals.forEach(function(animal) {
  animal.relationships = relationships;
});

console.log(animals);
