// Generators

//1
// function* greet() {
//     console.log(`You called 'next()'`)
// }
//
// let greeter = greet();
// console.log(greeter);
// let next = greeter.next();
// console.log(next);

//2
// function* greet() {
//     console.log(`You called 'next()'`)
//     yield "hello";
// }
//
// let greeter = greet();
// console.log(greeter);
// let next = greeter.next();
// console.log(next);
// let done = greeter.next();
// console.log(done);


//3
// function* greet() {
//   console.log(`Generators are "lazy"`);
//   yield "How";
//   console.log(`I'm not called until the second next`);
//   yield "are";
//   console.log(`Call me before "you?"`);
//   yield "you?";
//   console.log(`Called when "done"`);
// }
//
// var greeter = greet();
// for(let word of greeter) {
//   console.log(word);
// }


//4 //Assignments after the run
// function* greet() {
//   let friendly = yield "How";
//   friendly = yield friendly + "are";
//   friendly = yield friendly + "you?";
// }
//
// var greeter = greet();
// console.log(greeter.next().value);
// console.log(greeter.next("the heck ").value);
// console.log(greeter.next(" silly ol ").value);


//5

function* graph() {
  let x = 0;
  let y = 0;
  while(true) {
    yield {x:x, y:y}
    x += 2;
    y += 1;
  }
}

var graphGenerator = graph();
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
