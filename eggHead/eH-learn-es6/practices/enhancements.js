// Object Enhancements in ES6

var color = "red";
var speed = 10;
var drive = "go";

var car = {
  color,
  speed,
  [drive]: function() {
    console.log("VROOM!");
  }

};

console.log(car.color);
console.log(car.speed);
console.log(car[drive]());
