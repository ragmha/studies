// Using ES6 spread operator

//1
console.log(...[1, 2, 3]); // => 1 2 3

//2
let nums1 = [1, 2, 3];
let nums2 = [4, 5, 6];

nums1.push(...nums2);

nums1; // => [ 1, 2, 3, 4, 5, 6 ]

//3
let first = [1, 2, 3];
let second = [4, 5, 6];

const addThreeThings = (a, b, c) => a + b + c;

addThreeThings(...first); // => 6

addThreeThings(...second); // => 15
