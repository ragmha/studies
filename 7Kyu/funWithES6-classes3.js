/*
Fun with ES6 Classes #3 - Cuboids, Cubes and Getters

Task

Define the following classes.

I. Cuboid

The object constructor for the class Cuboid should receive exactly three
arguments in the following order: length, width, height and store these three
values in this.length, this.width and this.height respectively.

The class Cuboid should then have a getter surfaceArea which returns the surface
area of the cuboid and a getter volume which returns the volume of the cuboid.

II. Cube

class Cube is a subclass of class Cuboid. The constructor function of Cube should
receive one argument only, its length, and use that value passed in to set
this.length, this.width and this.height.

Hint: Make a call to
super
, passing in the correct arguments, to make life easier ;)

Related Articles

Listed below are a few articles of interest that may help you complete this Kata:

Stack Overflow - What are getters and setters in ES6?
getter - Javascript | MDN
*/

class Cuboid {
  constructor(length, width, height) {
    Object.assign(this, { length, width, height });
  }
  get surfaceArea() {
    return 2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height);
  }
  get volume() {
    return this.length * this.width * this.height;
  }
}

class Cube extends Cuboid {
  constructor(length) {
    super(length, length, length);
  }
}

//
//
//
//Test
//
//
// class Cuboid
var cuboid = new Cuboid(1, 2, 3);
cuboid.length;
//=> 1
cuboid.width;
//=> 2
cuboid.height;
//=> 3
cuboid.volume;
//=> 6
cuboid.surfaceArea;
//=> 22
cuboid.length = 4;
cuboid.volume;
//=> 24
cuboid.surfaceArea;
//=> 52
cuboid.width = 5;
cuboid.volume;
//=> 60
cuboid.surfaceArea;
//=> 94
cuboid.height = 6;
cuboid.volume;
//=> 120
cuboid.surfaceArea;
//=> 148
[ cuboid.length, cuboid.width, cuboid.height ];
//=>[7, 8, 9];
cuboid.volume;
//=> 504
cuboid.surfaceArea;
//=> 382
//
//
// class Cube extends Cuboid"
var cube = new Cube(1);
cube.length;
// => 1
cube.width;
// => 1
cube.height;
// => 1
cube.volume;
// => 1
cube.surfaceArea;
// => 6
cube.length = cube.width = cube.height = 2;
cube.volume;
// => 8
cube.surfaceArea;
// => 24
cube.length = cube.width = cube.height = 3;
cube.volume;
// => 27
cube.surfaceArea;
// => 54
cube.length = cube.width = cube.height = 5;
cube.volume;
// => 125
cube.surfaceArea;
// => 150
cube.length = cube.width = cube.height = 10;
cube.volume;
// => 1000
cube.surfaceArea; // => 600
