// Additional reducer argument

function reducer(acc, val, index, array) {
  var intermediaryVal = acc + val;

  if (index === array.length - 1) {
    return intermediaryVal / array.length;
  }
  return intermediaryVal;
}

var data = [ 1, 2, 3, 3, 4, 5, 3 ];
var mean = data.reduce(reducer, 0);

console.log(mean);
