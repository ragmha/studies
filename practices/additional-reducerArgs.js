// Additional reducer argument

function reducer(acc, val, index, array) {
  let intermediaryVal = acc + val;

  if (index === array.length - 1) {
    return intermediaryVal / array.length;
  }
  return intermediaryVal;
}

let data = [1, 2, 3, 3, 4, 5, 3];
let mean = data.reduce(reducer, 0);

mean; // => 3
