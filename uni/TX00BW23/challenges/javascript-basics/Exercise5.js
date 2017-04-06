// Exercise 5

/*
Modify your lottery app:

1. all numbers in a row must be unique
2. Parse returned arrays to strings before logging:
”1. lottery row: 1, 3, 20, 22, 28, 29 and 35”
”2. row: ..........”
”.............

Tip: check join(), pop() and splice() methods of an Array object
*/

function lottery() {
  let result = [];

  for (let i = 0; i < 7; i++) {
    let randomNum = Math.floor(Math.random() * 39 + 1);

    if (!result.includes(randomNum)) {
      result.push(randomNum);
    }
  }

  return result;
}

function ascending(a, b) {
  return a - b;
}

function run() {
  let number = prompt("Give me a number");

  for (var i = 1; i <= number; i++) {
    let arr = lottery();
    arr.sort(ascending);

    let lastElement = arr[arr.length - 1];
    let newItem = " and " + lastElement;
    arr.pop();

    let result = i + ".row:" + arr.toString() + newItem;
    console.log(result);
  }
}

// Test
run(); /* =>
1.row:3,9,14,16,24,25 and 29
2.row:4,7,9,14,26,28 and 30
3.row:3,14,16,18,22,26 and 38
4.row:7,9,15,16,36 and 38
*/
