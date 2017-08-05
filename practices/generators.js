// Generators

//1
function* greetA() {
  console.log(`You called 'next()'`);
}

const greeterA = greetA();
greeterA; // =>  {[[GeneratorStatus]]: "suspended"}

const nextA = greeterA.next(); // => You called 'next()'
nextA; // => { value: undefined, done: true }

//2
function* greetB() {
  console.log(`You called 'next()'`);
  yield 'hello';
}

const greeterB = greetB();
greeterB; // => {[[GeneratorStatus]]: "suspended"}

const nextB = greeterB.next(); // => You called 'next()'
nextB; // => { value: "hello", done: false }

const done = greeterB.next();
done; // => { value: undefined, done: true }

//3
function* greetC() {
  console.log(`Generators are "lazy"`);
  yield 'How';
  console.log(`I'm not called until the second next`);
  yield 'are';
  console.log(`Call me before "you?"`);
  yield 'you?';
  console.log(`Called when "done"`);
}

const greeterC = greetC();

for (let word of greeterC) {
  console.log(word);
} /* =>
 Generators are "lazy"
 How
 I'm not called until the second next
 are
 Call me before "you?"
 you?
 Called when "done"
*/

//4 Assignments after the run
function* greet() {
  let friendly = yield 'How';
  friendly = yield friendly + 'are';
  friendly = yield friendly + 'you?';
}

const greeter = greet();
greeter.next().value; // => How
greeter.next('the heck ').value; // => the heck are
greeter.next('silly ol ').value; // => silly ol you?

//5
function* graph() {
  let x = 0;
  let y = 0;
  while (true) {
    yield { x: x, y: y };
    x += 2;
    y += 1;
  }
}

const graphGenerator = graph();
graphGenerator.next().value; // => { x: 0, y: 0 }
graphGenerator.next().value; // => { x: 2, y: 1 }
graphGenerator.next().value; // => { x: 4, y: 2 }
graphGenerator.next().value; // => { x: 6, y: 3 }
graphGenerator.next().value; // => { x: 8, y: 4 }
