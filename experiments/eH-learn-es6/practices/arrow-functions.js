// Arrow Functions => in ES6

// 1
const createGreeting = function(message, name) {
  return message + name;
};

const arrowGreeting = (message, name) => message + name;

createGreeting('Hi ', 'Raghib'); // => Hi Raghib
arrowGreeting('Hi ', 'Green arrow'); // => Hi Green arrow

// 2
const deliveryBoy = {
  name: 'Raghib',

  handleMessage: (message, handler) => {
    handler(message);
  },
  recieve: function() {
    this.handleMessage('Hello ', message => console.log(message + this.name));
  },
};

deliveryBoy.recieve(); // => Hello Raghib
