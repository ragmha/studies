// Exercise 1

/*
1. Declare two variables myAge and yourAge and
assign them initial values and log to browser
console:

o ”My age is ” and the value of myAge
o ”Your age is ” and the value of yourAge
*/

var myAge = 77;
var yourAge = 88;

console.log("My age is " + myAge); // => My age is 77
console.log("Your age is " + yourAge); // => Your age is 88

/*
2. Compare the values of myAge and yourAge using if ... else.
Based on the comparison log to console who is older (me or you)
*/

if (myAge > yourAge) {
  console.log("I am older");
}else {
  console.log("You are older");
}
