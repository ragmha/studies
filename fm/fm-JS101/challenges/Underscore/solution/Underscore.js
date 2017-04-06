// 1.Use _.each to loop through an array and console.log() all the values. Now use it to console.log() the indices.
// How would this be different if you were looping through an object?

_.each([ 1, 2, 3 ], function(val, i, list) {
  console.log(val);
  console.log(i);
});

// 2. Write a function called checkValue that searches an array for a value. It takes an array and a value and returns true if the value exists in the array, otherwise it returns false.
var helloArr = [ 'bonjour', 'hello', 'hola' ];

var checkValue = function(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return true;
    }
  }
  return false;
};

//Test
checkValue(helloArr, 'bonjour');

// true
// 3. Rewrite checkValue using _.each. Make sure that you have underscore.js included where you are running your code.
var helloArr = [ 'bonjour', 'hello', 'hola' ];

var checkValue = function(arr, val) {
  var result = false;
  _.each(arr, function(v) {
    if (v == val) {
      result = true;
    }
  });
  return result;
};

// Test
checkValue(helloArr, 'bonjour');

// true
// 4. Write a loop that pushes all the values in an object to an array.
function val(obj) {
  var output = [];

  for (var key in obj) {
    output.push(obj[key]);
  }

  return output;
}

// Test
val({ two: 2, four: 4, three: 3, twelve: 12 });

//[2, 4, 3, 12]
// 5. Use _.map to mimic the previous behavior.
function val(obj) {
  return _.map(obj, function(val) {
    return val;
  });
}

// Test
val({ two: 2, four: 4, three: 3, twelve: 12 });

//[2, 4, 3, 12]
// 6. Use _.filter to return all the even numbers in an array.
function even(list) {
  return _.filter(list, function(l) {
    return l % 2 === 0;
  });
}

// Test
even([ 9, 8, 7, 6, 5, 2 ]); //[8,6,2]
