// Rest Parameters

//1 rest params vs args keyword
function myFunc() {
  console.log(arguments.length);
}
myFunc(1, 2, 3); // returns array like object

//2 (since its array like function) (NOTE: THIS WONT WORK!)
function myFunc() {
  arguments.forEach(function(v, i, a) {
    console.log(v);
  });
}
myFunc(1, 2, 3); // returns array like object

//3 (OLD WAY!)
function Store() {
  var aisle = {
    fruits: [],
    vegetable: [],
  };

  return {
    // Store.add('category', 'item1',...);
    add: function(category) {
      var items = [].splice.call(arguments, 1);
      console.log(items);
      items.forEach(function(value, index, array) {
        aisle[category].push(value);
      });
    },
    aisle: aisle,
  };
}

let myGrocerryStore = new Store();

myGrocerryStore.add('fruits', 'apples', 'oranges');
console.log(myGrocerryStore.aisle);

//4 Using ES6
function Store() {
  var aisle = {
    fruits: [],
    vegetable: [],
  };

  return {
    // Store.add('category', 'item1',...);
    add: function(category, ...items) {
      items.forEach(function(value, index, array) {
        aisle[category].push(value);
      });
    },
    aisle: aisle,
  };
}

let myGrocerryStore = new Store();

myGrocerryStore.add('fruits', 'apples', 'oranges');
console.log(myGrocerryStore.aisle);
