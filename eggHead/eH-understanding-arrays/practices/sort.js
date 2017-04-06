// Sort an Array Alphabetically or Numerically
// Array.prototype.sort();

// Basics

// Names
var items = [ 'Raghib', 'Hasan', 'Isaac' ];
items.sort();
console.log(items);

// [ 'Hasan', 'Isaac', 'Raghib' ]
// Numbers
var items2 = [ 10, 30, 2, 20 ];
items2.sort();
console.log(items2);
// [ 10, 2, 20, 30 ]
//very strange result! because of unicode >< as they are converted to strings!
// You need to use a comparitive function thus ... (NUMBERIC SORT!)
var items2 = [ 10, 30, 2, 20 ];
items2.sort((a, b) => a - b);
// ASSENDING SORT!
// you get raw values instead of strings!
// Only cares if value is ==0 ,<0 , >0
console.log(items2);

// [ 2, 10, 20, 30 ]
var items2 = [ 10, 30, 2, 20 ];
items2.sort((a, b) => b - a);
// DECENDING SORT!
console.log(items2);

// [ 30, 20, 10, 2 ]
// Comparing based on the length of the string
var items = [ 'Raghib', 'Hasan', 'Isaac', 'Kittie' ];
items.sort((a, b) => b.length - a.length);
console.log(items);

// [ 'Raghib', 'Kittie', 'Hasan', 'Isaac' ]
// USEFUL EXAMPLE
var lessons = [
  { title: 'Javascript Array methods in depth - concat', views: 1000 },
  { title: 'Javascript Array methods in depth - slice', views: 1050 },
  { title: 'Javascript Array methods in depth - join', views: 1025 }
];

var list = lessons
  .sort((a, b) => b.views - a.views)
  .map(x => `  <li>${x.title}  (${x.views})</li>`)
  .join('\n');

var output = `<ul>\n${list}\n</ul>`;

console.log(output);
// Try
// var lessons = [
//     {
//         title: 'Javascript Array methods in depth - concat',
//         views: 1000
//     },
//     {
//         title: 'Javascript Array methods in depth - slice',
//         views: 1050
//     },
//     {
//         title: 'Javascript Array methods in depth - join',
//         views: 1025
//     }
// ];
//
// var list = lessons
//     .sort((a,b) => b.views - a.views) // DECENDING ORDER TOP VIEWS :D
//     .map(x => ` <li>${x.title} - ${x.views}</li>`)
//     .join('\n');
//
// var output = `<ul>\n${list}\n</ul>`
// console.log(output);
// =====================DOM======================
// var container = document.querySelector('#output');
// container.innerHTML = output
