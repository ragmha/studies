// Filter an Array with Truthy Values
// Array.prototype.filter();

// Basics
let items = [1, 2, 3, 4, 5];
let filteredA = items.filter(x => x > 3);

items; // => [ 1, 2, 3, 4, 5 ]
filteredA; // => [ 4, 5 ]

// Example
let people = [
  { name: 'Raghib', pets: ['cat', 'dog'] },
  { name: 'John', pets: ['horse'] },
  { name: 'Ben' },
];

let filteredB = people.filter(x => x.pets);

filteredB; /* =>
    [ { name: 'Raghib', pets: [ 'cat', 'dog' ] },
    { name: 'John', pets: [ 'horse' ] } ]
*/

// Basic usage (search term on array)
const lessons = [
  {
    title: 'Javascript Arrays in Depth - join',
    views: 960,
    tags: ['array', 'join'],
  },
  {
    title: 'Javascript Arrays in Depth - concat',
    views: 1050,
    tags: ['array', 'concat'],
  },
  {
    title: 'Javascript Arrays in Depth - slice',
    views: 2503,
    tags: ['array', 'slice'],
  },
  {
    title: 'Javascript Functions in Depth - bind',
    views: 2500,
    tags: ['functions', 'bind'],
  },
];

let miinViews = 1000;
let searchTermA = 'array';

let filteredC = lessons
  .filter(x => x.tags.indexOf(searchTermA) > -1)
  .filter(x => x.views > miinViews)
  .sort((a, b) => b.views - a.views)
  .map(x => `   <li> ${x.title} - ${x.views}</li>`)
  .join('\n');

let outputA = `<ul>\n${filteredC}\n</ul>`;

outputA; /* =>
<ul>
   <li> Javascript Arrays in Depth - slice - 2503</li>
   <li> Javascript Arrays in Depth - concat - 1050</li>
</ul>
*/

// Basic usage search term (Functions)
//
const lessons1 = [
  {
    title: 'Javascript Arrays in Depth - join',
    views: 960,
    tags: ['array', 'join'],
  },
  {
    title: 'Javascript Arrays in Depth - concat',
    views: 1050,
    tags: ['array', 'concat'],
  },
  {
    title: 'Javascript Arrays in Depth - slice',
    views: 2503,
    tags: ['array', 'slice'],
  },
  {
    title: 'Javascript Functions in Depth - bind',
    views: 2500,
    tags: ['functions', 'bind'],
  },
];

let minViews = 1000;
let searchTermB = 'functions';

let filteredD = lessons1
  .filter(x => x.tags.indexOf(searchTermB) > -1)
  .filter(x => x.views > minViews)
  .sort((a, b) => b.views - a.views)
  .map(x => `   <li> ${x.title} - ${x.views}</li>`)
  .join('\n');

let outputB = `<ul>\n${filteredD}\n</ul>`;

outputB; /* =>
    <ul>
        <li> Javascript Functions in Depth - bind - 2500</li>
    </ul>
*/
