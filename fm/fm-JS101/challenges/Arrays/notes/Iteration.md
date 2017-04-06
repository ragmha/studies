# Iteration

```
// Prints out property names
var box = [];

box['size'] = 9;

box['0'] = 'meow';

for (var k in box) {
  console.log(k); // 'size', '0'
}
```

```
Checking if objects & arrays are same

var box = [];
var box2 = {};

box.asdf = true;
box2.asdf = true;

box['size'] = 9;

box['0'] = 'meow';

for (var k in box) {
  console.log(k); // 'size', '0'
}

console.log(box.asdf === box2.asdf);
```

```
// Prints out propety value
var box = [];

box['size'] = 9;

box['0'] = 'meow';

for (var k in box) {
  console.log(box[k]); // '9', 'meow'
}

```

```
// What does it print? 😮
var box = [];

box['size'] = 9;

box['0'] = 'meow';

for (var k in box) {
  console.log(box.k); // undefined, undefined bc k is a variable
}

```


```
var box = [];

box['size'] = 9;
box['0']='meow'
box.push('Wohoo!');

for(var i=0; i<box.length; i++){
  console.log(i); //0, 1
}
```


```
var box = [];

box['size'] = 9;
box['0']='meow'
box.push('Wohoo!');

for(var i=0; i<box.length; i++){
  console.log(box[i]); //'meow','Wohoo!'
}

//box = {
  0: 'meow',
  1: 'Wohoo!',
  'size': 9
}
```
