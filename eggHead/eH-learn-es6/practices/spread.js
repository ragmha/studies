// Using ES6 spread operator

//1
console.log(...[1,2,3]);


//2
// let first = [1,2,3];
// let second = [4,5,6];
//
// first.push(...second);
// console.log(first);


//3
let first = [1,2,3];
let second = [4,5,6];

function addThreeThings(a, b, c) {
  let result = a + b + c;
  console.log(result);
}

addThreeThings(...first);
addThreeThings(...second);
