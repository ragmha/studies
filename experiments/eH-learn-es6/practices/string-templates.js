// String templates in ES6

//1
let salutation = 'Hello';
let greeting = `
    ${salutation},

    World!`;

greeting; /* => 
    Hello,

    World!
*/

//2
let x = 1;
let y = 2;

let equation = `${x} + ${y} = ${x + y}`;

equation; // => 1 + 2 = 3

//3
let wut = `It's ${new Date().getHours()} I'm sleepy`;

wut; // => It's 9 I'm sleepy

//4
function taag(strings, ...values) {
  console.log(strings);
  console.log(values);
}
let messsage = taag`It's ${new Date().getHours()} I'm sleepy`;
messsage; /*
[ 'It\'s ', ' I\'m sleepy' ]
[ 9 ]
*/

//5
function tag(strings, ...values) {
  if (values[0] < 20) {
    values[1] = 'awake';
  }

  return `${strings[0]}${values[0]}${strings[1]}${values[1]}`;
}

let message = tag`It's ${new Date().getHours()} I'm ${''}`;

message; // => It's 9 I'm awake
