# Access and Assignment

# 1

```
var box = [];

box[0] = true;
box[1]= 'meow';
box.push({'hello': 'goodbye'});

var i = 0;

box[i]; //true
box[1]; // 'meow'
box.pop(); {'hello': 'goodbye'}

console.log(box); [true, 'meow']
```

#2

```
var box = {};

box['size'] = 9;

box['0'] = 'meow';

box['size']; // 9
box[0]; // 'meow'


var box = [];

box['size'] = 9;

box['0'] = 'meow';

box['size']; // 9
box[0]; // 'meow'


var box = [];

box['size'] = 9;

box['0'] = 'meow';

box.size; // 9
box[0]; // 'meow'

var box = [];

box['size'] = 9;

box['0'] = 'meow';

box.size; // 9
box.0; // 'meow'

```

# 3
* Rules don't change

* Arrays and objects are pass by reference
