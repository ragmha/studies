// const Declarations in es6(es2015)
// This is a constant reference not a constant variable

//1
const VALUE = 'hello world';

VALUE; // => hello world

//2
const VAL = {};
VAL.foo = 'bar';
VAL.bar = 'baz';

VAL; // => { foo: 'bar', bar: 'baz' }

//3
// const references to API key & secrect
// port number, PI, etc

//4
// const is also blocked scoped
if (true) {
  const foo = 'bar';
}

foo; // => ReferenceError: foo is not defined
