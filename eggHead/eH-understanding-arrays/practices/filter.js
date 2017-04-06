// Filter an Array with Truthy Values
// Array.prototype.filter();

// Basics
var items = [ 1, 2, 3, 4, 5 ];
var filtered = items.filter(x => x > 3);

console.log(items);
console.log(filtered);

// Example
var people = [
  { name: 'Raghib', pets: [ 'cat', 'dog' ] },
  { name: 'John', pets: [ 'horse' ] },
  { name: 'Ben' }
];

var filtered = people.filter(x => x.pets);

console.log(filtered);

// Basic usage (search term on array)
//
const lessons = [
  {
    title: 'Javascript Arrays in Depth - join',
    views: 960,
    tags: [ 'array', 'join' ]
  },
  {
    title: 'Javascript Arrays in Depth - concat',
    views: 1050,
    tags: [ 'array', 'concat' ]
  },
  {
    title: 'Javascript Arrays in Depth - slice',
    views: 2503,
    tags: [ 'array', 'slice' ]
  },
  {
    title: 'Javascript Functions in Depth - bind',
    views: 2500,
    tags: [ 'functions', 'bind' ]
  }
];

var minViews = 1000;
var searchTerm = 'array';

var filtered = lessons
  .filter(x => x.tags.indexOf(searchTerm) > -1)
  .filter(x => x.views > minViews)
  .sort((a, b) => b.views - a.views)
  .map(x => `   <li> ${x.title} - ${x.views}</li>`)
  .join('\n');

var output = `<ul>\n${filtered}\n</ul>`;

console.log(output);

// Basic usage search term (Functions)
//
const lessons1 = [
  {
    title: 'Javascript Arrays in Depth - join',
    views: 960,
    tags: [ 'array', 'join' ]
  },
  {
    title: 'Javascript Arrays in Depth - concat',
    views: 1050,
    tags: [ 'array', 'concat' ]
  },
  {
    title: 'Javascript Arrays in Depth - slice',
    views: 2503,
    tags: [ 'array', 'slice' ]
  },
  {
    title: 'Javascript Functions in Depth - bind',
    views: 2500,
    tags: [ 'functions', 'bind' ]
  }
];

var minViews = 1000;
var searchTerm = 'functions';

var filtered = lessons1
  .filter(x => x.tags.indexOf(searchTerm) > -1)
  .filter(x => x.views > minViews)
  .sort((a, b) => b.views - a.views)
  .map(x => `   <li> ${x.title} - ${x.views}</li>`)
  .join('\n');

var output = `<ul>\n${filtered}\n</ul>`;

console.log(output);
