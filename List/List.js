class List {
  constructor() {
    this.memory = [];
    this.length = 0;
  }

  // Retrieves data from the list
  get(address) {
    return this.memory[address];
  }

  // Adding an item to the end of a list
  push(value) {
    this.memory[this.length] = value;
    this.length++;
  }

  // Removing an item from the end of a list
  pop() {
    // Doesn't Pop, if no items exist in the list
    if (this.length === 0) return;

    // Get the last value, stop storing it and return it
    let lastAddress = this.length - 1;
    let value = this.memory[lastAddress];
    delete this.memory[lastAddress];
    this.length--;

    // Return the value so it can be used
    return value;
  }

  // Adding an item to the begining of a list
  unshift(value) {
    // Store the value to be added to the start
    let previous = value;

    // Iterate through each line
    for (let address = 0; address < this.length; address++) {
      // Swaping the current value with previous value and vice versa
      let current = this.memory[address];
      this.memory[address] = previous;
      previous = current;
    }

    // Add the last item in a new position at the end of the list
    this.memory[this.length] = previous;
    this.length++;
  }

  // Removing an item at the begining of a list
  shift() {
    // Don't shift if no items exist
    if (this.length === 0) return;

    let value = this.memory[0];

    // Iterate through each item...
    for (let address = 0; address < this.length; address++) {
      // replace each item with next item in the list
      this.memory[address] = this.memory[address + 1];
    }

    // Delete last item since it is now in the previous address
    delete this.memory[this.length - 1];
    this.length--;

    return value;
  }
}

const l = new List();

l.push(1);
l.push(2);
l.push(3);
l.push(4);
console.log(l);
l.pop();
console.log(l);
l.unshift("meow");
console.log(l);
l.shift();
console.log(l);
