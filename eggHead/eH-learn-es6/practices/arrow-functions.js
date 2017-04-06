// Arrow Functions => in ES6

// 1
var createGreeting = function(message, name) {
  return message + name;
};

var arrowGreeting = (message, name) => message + name;

console.log(createGreeting('Hi ','Raghib!'));
console.log(arrowGreeting('Hi ','Green arrow!'));

// 2
// var deliveryBoy = {
//   name: 'Raghib',
//
//   handleMessage: function(message, handler) {
//       handler(message);
//   },
//
//   recieve: function() {
//     var that = this;
//
//     this.handleMessage("Hello ", function(message) {
//       console.log(this)
//       console.log(message + that.name);
//     })
//   }
// };
//
var deliveryBoy = {
  name: 'Raghib',

  handleMessage: (message, handler) => {
    handler(message)
  },
  recieve: function() {
    this.handleMessage("Hello ", message => console.log(message + this.name));
  }
};

deliveryBoy.recieve();
