// Produce a single value from an Array with reduce
// Array.prototype.reduce();

// Basics
// const items = [1, 2, 3, 4, 5];
// const sum = items.reduce((prev, next) => prev + next);
//
// /*
//   fn(1, 2) => 3
//   fn(3, 3) => 6
//   fn(6, 4) => 10
//   fn(10, 5) => 15
//  */
//
// console.log(sum);

// Practical Example 1 (Counting number of images in albulm)
const albums = [
  { title: 'Holiday in Spain', images: [ '01.jpg', '02.jpg' ] },
  { title: 'House renovation', images: [ '01.jpg', '04.jpg', '05.jpg' ] }
];

const numImages = albums.reduce((prev, album) => prev + album.images.length, 0);
console.log(numImages);

const Images = albums.reduce((prev, album) => prev.concat(album.images), []);
// creates a flat array containing all images
console.log(Images);

// Another example
const users = [ { id: '01', name: 'Shane' }, { id: '02', name: 'Sally' } ];

const newUsers = users.reduce(
  (obj, user) => {
    obj[user.id] = user.name;
    return obj;
  },
  {}
);

console.log(newUsers);
