// Object Enhancements in ES6

const color = 'red';
const speed = 10;
const drive = 'go';

const car = {
  color,
  speed,
  [drive]: function() {
    console.log('VROOM!');
  },
};

car.color; // => red
car.speed; // => 10
car[drive](); // => VROOM!
