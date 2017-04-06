// const Declarations in es6(es2015)
// This is a constant reference not a constant variable

//1
const VALUE = "hello world";
console.log(VALUE);

//2
const VAL = {};
VAL.foo = 'bar';
VAL.bar = 'baz';
console.log(VAL);

//3
// const references to API key & secrect
// port number, PI, etc

//4
// const is also blocked scoped
if(true){
  const foo = 'bar';
}
console.log('foo: ', foo);
