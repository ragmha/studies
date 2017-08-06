function* createHello() {
  yield 'first'; // => generator is paused the 'first' val is returned
}

// Instance of the createHello generator (you can send and recive to generator)
const hello = createHello();

console.log(hello.next()); // => { value: 'first', done: false }
console.log(hello.next()); // => { value: undefined, done: true } End of Generator function
