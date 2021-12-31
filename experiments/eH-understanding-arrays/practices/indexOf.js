// Check if a Value is in an Array with indexOf
// Array.prototype.indexOf()

// Basic
let familyA = ['Adam', 'Eve', 'Steve', 'Raghib'];

let kittieExists = familyA.indexOf('Kittie') > -1;

if (!kittieExists) {
  familyA.push('Kittie');
}
familyA.indexOf('Kittie'); // =>  4

familyA.indexOf('chrisBrown'); // =>  -1

kittieExists; // => true

// Another example

let familyB = ['Adam', 'Eve', 'Steve', 'Raghib'];

familyB.indexOf('Eve', 2); // =>  -1 because start position is at 2, it starts to search from index 2

familyB.indexOf('Eve', 1); // => 1

// Example [ Searchning for an object]
let shane = { name: 'Shane' };

let adam = { name: 'Adam' };

let steve = { name: 'Steve' };

let family = [shane, adam];

family.indexOf(steve); // => -1

// -1
// Using .indexOf to create a filter
let whiteList = ['.css', '.js'];

let events = [
  { file: 'css/core.css' },
  { file: 'js/app.js' },
  { file: 'index.html' },
];

let filtered = events.filter(event => {
  let ext = require('path').extname(event.file);
  return whiteList.indexOf(ext) > -1;
});

filtered; // => [ { file: 'css/core.css' }, { file: 'js/app.js' } ]
