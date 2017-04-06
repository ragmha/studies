// String templates in ES6

//1
var salutation = "Hello";
var greeting = `
${salutation},

World!
`
console.log(greeting);

//2
var x = 1;
var y = 2;

var equation = `${x} + ${y} = ${x+y}`;
console.log(equation);



//3
// var message = `It's ${new Date().getHours()} I'm sleepy`;
// console.log(message);

//4
// function tag(strings, ...values){
//   console.log(strings);
//   console.log(values);
// }
// var message = tag`It's ${new Date().getHours()} I'm sleepy`;
// console.log(message);


//5
function tag(strings, ...values){
  if(values[0] < 20) {
    values[1] = "awake";
  }

  return `${strings[0]}${values[0]}${strings[1]}${values[1]}`

}
var message = tag`It's ${new Date().getHours()} I'm ${""}`;
console.log(message);
