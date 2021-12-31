// Sort an Array Alphabetically or Numerically
// Array.prototype.sort();

// Basics

// Names
let items = ['Raghib', 'Hasan', 'Isaac'];
items.sort();
items; // => [ 'Hasan', 'Isaac', 'Raghib' ]

// Numbers
let items2 = [10, 30, 2, 20];
items2.sort();
items2; /* =>  [ 10, 2, 20, 30 ] very strange result! because of unicode >< as they are converted to strings!
You need to use a comparitive function thus ... (NUMBERIC SORT!) */

let items3 = [10, 30, 2, 20];
items3.sort((a, b) => a - b);
// ASSENDING SORT!
// you get raw values instead of strings!
// Only cares if value is ==0 ,<0 , >0
items3; // => [ 2, 10, 20, 30 ]

let items4 = [10, 30, 2, 20];
items4.sort((a, b) => b - a);
// DECENDING SORT!
items4; // => [ 30, 20, 10, 2 ]

// Comparing based on the length of the string
let items5 = ['Raghib', 'Hasan', 'Isaac', 'Kittie'];
items5.sort((a, b) => b.length - a.length);
items5; // => [ 'Raghib', 'Kittie', 'Hasan', 'Isaac' ]

// USEFUL EXAMPLE
let lessons = [
  { title: 'Javascript Array methods in depth - concat', views: 1000 },
  { title: 'Javascript Array methods in depth - slice', views: 1050 },
  { title: 'Javascript Array methods in depth - join', views: 1025 },
];

let list = lessons
  .sort((a, b) => b.views - a.views)
  .map(x => `  <li>${x.title}  (${x.views})</li>`)
  .join('\n');

let output = `<ul>\n${list}\n</ul>`;

output; /* => 
    <ul>
    <li>Javascript Array methods in depth - slice  (1050)</li>
    <li>Javascript Array methods in depth - join  (1025)</li>
    <li>Javascript Array methods in depth - concat  (1000)</li>
    </ul>
*/

let lessonsB = [
  {
    title: 'Javascript Array methods in depth - concat',
    views: 1000,
  },
  {
    title: 'Javascript Array methods in depth - slice',
    views: 1050,
  },
  {
    title: 'Javascript Array methods in depth - join',
    views: 1025,
  },
];

let listB = lessonsB
  .sort((a, b) => b.views - a.views) // DECENDING ORDER TOP VIEWS :D
  .map(x => ` <li>${x.title} - ${x.views}</li>`)
  .join('\n');

let outputB = `<ul>\n${list}\n</ul>`;
console.log(outputB);

//=====================DOM======================
let container = document.querySelector('#output');
container.innerHTML = output;
