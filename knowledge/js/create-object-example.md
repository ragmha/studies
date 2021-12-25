# Creating an Object

### Using Object literal
```javascript
let task = {};

task.title = "My task";
task.description = "My Description";

console.log(task.title); // => My task
```

### Using Object.create()
```javascript
let task = Object.create(object.prototype);

task.title = "My task";
task.description = "My Description";

console.log(task.title); // => My task
```

### Adding a method to our object
```javascript
let task = Object.create(object.prototype);

task.title = "My task";
task.description = "My Description";
task.toString = () => `${this.title}`

console.log(task.toString()); // => My task
```
