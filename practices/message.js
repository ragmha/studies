function* createHello() {
  const word = yield;
  console.log(word);
}

// Instance of the createHello generator (you can send and recive to generator)
const hello = createHello();

console.log(hello.next()); // => { value: undefined, done: false }

// Raghib is logged because the generator is resumed!
console.log(
  hello.next('Raghib')
); /* => 
Raghib 
{ value: undefined, done: true }
*/
