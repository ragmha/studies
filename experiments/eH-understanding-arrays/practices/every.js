// Validate Data with the Every() Method
// Array.prototype.every();

// Basics
const itemsA = [1, 2, 3, 4, 5];
const resultA = itemsA.every(item => {
  console.log('Called with', item);
  return item < 5;
});

resultA; /* => 
    Called with 1
    Called with 2
    Called with 3
    Called with 4
    Called with 5
*/

//  Basics 2
const itemsB = ['1', '2', 3, '4', 5];
const resultB = itemsB.every(item => typeof item === 'string');

resultB; // => false

// Exampe 1
const fields = [
  {
    field: 'email',
    value: 'meow@example.com',
    errors: [],
  },
  {
    field: 'name',
    value: '',
    errors: ['No name provided'],
  },
];

const isValid = fields.every(field => field.errors.length === 0);

isValid; //=> false

// Tracking every video course
var videos = [
  { title: 'Array methods in depth: concat', length: 310, viewed: 310 },
  { title: 'Array methods in depth: join', length: 420, viewed: 360 },
];

function complete(x) {
  return x.viewed === x.length;
}

const isComplete = videos.every(complete);
const completed = videos.filter(complete);

isComplete; // => false

completed; /* => [ { title: 'Array methods in depth: concat',
    length: 310,
    viewed: 310 } ]
*/
