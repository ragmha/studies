// Validate Data with the Every() Method
// Array.prototype.every();

// Basics
// const items = [ 1, 2, 3, 4, 5];
// const result = items.every(item => {
// 	 console.log('Called with', item);
// 	return item < 5
// });
//
// console.log(result);

//  Basics 2
// const items = [ "1", "2", 3, "4", 5];
// const result = items.every(item => typeof item === 'string');
//
// console.log(result);

// Exampe 1
// const fields = [
//   {
//       field: 'email',
//       value: 'meow@example.com',
//       errors: []
//   },
//   {
//       field: 'name',
//       value: '',
//       errors: ['No name provided']
//   }
// ];
//
//
// const isValid = fields.every(field => field.errors.length === 0);
//
// console.log(isValid);
//

// Tracking every video course
var videos = [
  { title: 'Array methods in depth: concat', length: 310, viewed: 310 },
  { title: 'Array methods in depth: join', length: 420, viewed: 360 }
];

function complete(x) {
  return x.viewed === x.length;
}

const isComplete = videos.every(complete);
const completed = videos.filter(complete);

console.log(isComplete);
console.log(completed);
