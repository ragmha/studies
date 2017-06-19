/*
Description:

Fun with ES6 Classes #2 - Animals and Inheritance

Overview

Preloaded for you in this Kata is a class Animal:

class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

Task

Define the following classes that inherit from Animal using the extends keyword.

I. Shark

The constructor function for Shark should accept 3 arguments in total in the
following order: name, age, status. All sharks should have a leg count of 0
(since they obviously do not have any legs) and should have a species of "shark".

II. Cat

The constructor function for Cat should accept the same 3 arguments as with Shark:
name, age, status. Cats should always have a leg count of 4 and a species of
"cat".

Furthermore, the introduce() method for Cat should be identical to the original
introduce() except there should be exactly 2 spaces and the words "Meow meow!"
after that. For example:

var example = new Cat("Example", 10, "Happy");
example.introduce() === "Hello, my name is Example and I am 10 years old.
Meow meow!"; // Notice the TWO spaces - very important


III. Dog

The Dog constructor should accept 4 arguments in the specified order: name, age,
status, master. master is the name of the dog's master which will be a string.
Furthermore, dogs should have 4 legs and a species of "dog".

Dogs have an identical introduce() method as any other animal, but they have
their own method called greetMaster() which accepts no arguments and returns
"Hello (insert_master_name_here)" (of course not the literal string but replace
the (insert_master_name_here) with the name of the dog's master).

*/

// Get Coding :)

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, 'shark', status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, 'cat', status);
  }

  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, 'dog', status);
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}`;
  }
}
// Test
// SHARK CLASS
var billy = new Shark('Billy', 3, 'Alive and well');
billy.name;
//=> 'Billy'
billy.age;
//=> 3
billy.legs;
//=> 0
billy.species;
//=> 'shark'
billy.status;
//=> 'Alive and well'
billy.introduce();

//=>`Hello, my name is Billy and I am 3 years old.`
// CAT CLASS
var cathy = new Cat('Cathy', 7, 'Playing with a ball of yarn');
cathy.name;
//=> 'Cathy'
cathy.age;
//=> 7
cathy.legs;
//=> 4
cathy.species;
//=> 'cat'
cathy.status;
//=> 'Playing with a ball of yarn'
cathy.introduce();

//=>'Hello, my name is Cathy and I am 7 years old.  Meow meow!'
// DOG CLASS
var doug = new Dog('Doug', 12, 'Serving his master', 'Eliza');
doug.name;
//=> 'Doug'
doug.age;
//=> 12
doug.legs;
//=> 4
doug.species;
//=> 'dog'
doug.status;
//=> 'Serving his master'
doug.introduce();
//=> 'Hello, my name is Doug and I am 12 years old.'
doug.greetMaster(); //=> 'Hello Eliza'
