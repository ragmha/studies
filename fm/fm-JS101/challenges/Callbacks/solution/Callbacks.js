//7. Using the module pattern, design a toaster. Use your creativity here and think about what you want your users to be able
// to access on the outside of your toaster vs what you don't want them to be able to touch.

var Toaster = function() {
  //some private methods and properties
  var maxTemp = 500;
  var temp = 0;

  return {
    //some public methods and properties, etc
    setTemp: function(newTemp) {
      if (newTemp > maxTemp) {
        console.log('That temp is too high!');
      } else {
        temp = newTemp;
      }
    }
  };
};

var myToaster = new Toaster();

console.log(myToaster.setTemp(600));

// 1
var funcCaller = function(func, arg) {
  return func(arg);
};

// 2
var firstVal = function(arr, func) {
  func(arr[0], 0, arr);
};

// 3
firstVal = function(list, func) {
  if (Array.isArray(list)) {
    func(arr[0], 0, arr);
  } else {
    //for(var k in list){
    //  return func(list[k], k, list);
    //}
    var propArr = Object.keys(list);
    func(list[propArr[0]], propArr[0], list);
  }
};
