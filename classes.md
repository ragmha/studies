# Creating Classes and Objects

```javascript
class Drone {
  // drone details...
}

let drone = new Drone(); // creating a new instance(object) :D

console.log(typeof Drone); // function
console.log(typeof drone); // object
console.log(drone instanceof Drone); // true :D
```

## Constructor
```javascript
class Drone {
  constructor(id, name){
    console.log(id,'',name);
  }
}

let drone = new Drone('123','meow');

console.log(drone); // 123 meow Drone
```

```javascript
class Drone {
  constructor(id, name){ // CREATE INSTANCE VARIABLES
    this.id = id;
    this.name = name;
  }
}

let drone = new Drone('123','meow');

console.log(drone); // Drone {id:"123", name:"meow"}
```


```javascript
class Drone {
	constructor(id, name) {
		// instance properties
		this.id = id;
		this.name = name;
	}

}

Drone.maxHeight = 200; // static properties / class properties

let drone = new Drone('123', 'meow');
let drone2 = new Drone('456', 'Twirl');

console.log(drone.id, drone2.id);

console.log(Drone.maxHeight);
```


## Methods
```javascript
class Drone {
	constructor(id, name) {
		// instance properties
		this.id = id;
		this.name = name;
	}

	fly() {
		console.log('Drone' + this.id + ' is flying');
		//accessing the instance property use ´this´
	}

}


let drone = new Drone('A123', 'meow');
let drone2 = new Drone('B456', 'Twirl');

drone.fly();
drone2.fly();
```
## Methods(static)
> Static methods only has access to static properties not instance properties
```javascript
class Drone {
	constructor(id, name) {
		// instance properties
		this.id = id;
		this.name = name;
	}

	static getCompany() { // static method
		console.log('inside company');
	}

	fly() {
		console.log('Drone' + this.id + ' is flying');
	}

}


let drone = new Drone('A123', 'meow');
let drone2 = new Drone('B456', 'Twirl');

Drone.getCompany();

```
## Getters and Setters

```javascript
class Drone {
  constructor(id){
    this._id = id;
     // var begining with underscore `_` usually means its private
     // but not in this case
  }

  get id(){
    console.log('in ID getter')
    return this._id;
  }

  set id(value) {
    this._id = value;
  }
}

let drone = new Drone('A007', 'rawr');
drone.id = 'B456';
console.log(drone.id);
```
