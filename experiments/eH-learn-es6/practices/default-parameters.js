// Default Values for Function Parameters in ES6

//1
function greet(greeting, name = 'John') {
  console.log(greeting + ' ' + name);
}

greet('Hello'); // => Hello John

//2
function recieve(complete = () => console.log('complete')) {
  complete();
}

recieve(); // => complete
