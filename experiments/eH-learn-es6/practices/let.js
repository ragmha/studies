// let keyword

//1
let message = 'hi';
{
  let message = 'bye';
}

message; // => hi

//2 let creates a new i each time it loops instead of var due to closure
var fs = [];
for (let i = 0; i < 10; i++) {
  fs.push(function() {
    console.log(i);
  });
}

fs.forEach(function(f) {
  f();
});

//3
function letFunc() {
  let previous = 0;
  let current = 1;

  for (let i = 0; i < 10; i += 1) {
    let temp = previous;
    previous = current;
    current = temp + current;
  }
  console.log(current);
}

letFunc();
