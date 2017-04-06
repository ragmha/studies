// Use Some as a Ternary Operator or Conditional
// Array.prototype.some();

var items = [ 1, 2, 3, 4, 5 ];
var hasThree = items.some(x => x === 3);

console.log(hasThree);

// Basic Usage
var tasks = [
  { title: 'Do laundry', completed: true },
  { title: 'Feed the cat', completed: true },
  { title: 'Watch the array lessons on egghead.io', completed: true }
];

function addTask(title) {
  if (tasks.some(task => task.title === title)) {
    console.log('WARNING: DUPLICATE ENTRY!', 'title:', title);
    return;
  }
  tasks.push({ title: title, completed: false });
}

addTask('Feed the cat');

console.log(tasks);
