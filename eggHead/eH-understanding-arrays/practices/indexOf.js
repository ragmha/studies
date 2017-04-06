// Check if a Value is in an Array with indexOf
// Array.prototype.indexOf()

// Basic
var family = [ 'Adam', 'Eve', 'Steve', 'Raghib' ];

if (!kittieExists) {
  family.push('Kittie');
}

var kittieExists = family.indexOf('Kittie') > -1;

console.log(family.indexOf('Kittie'));
// sucessfull! returns 4
console.log(family.indexOf('chrisBrown'));

// returns -1
console.log(kittieExists);

// true
// Another example
//
var family = [ 'Adam', 'Eve', 'Steve', 'Raghib' ];

console.log(family.indexOf('Eve', 2));
// returns -1 because
//start position is at 2, it starts to search from index 2
console.log(family.indexOf('Eve', 1));

// Example [ Searchning for an object]
var shane = { name: 'Shane' };

var adam = { name: 'Adam' };

var steve = { name: 'Steve' };

var family = [ shane, adam ];

console.log(family.indexOf(steve));

// -1
// Using .indexOf to create a filter
var whiteList = [ '.css', '.js' ];

var events = [
  { file: 'css/core.css' },
  { file: 'js/app.js' },
  { file: 'index.html' }
];

var filtered = events.filter(event => {
  var ext = require('path').extname(event.file);
  return whiteList.indexOf(ext) > -1;
});

console.log(filtered);
