# Iteration 👍

```
var box = {};

box['material'] = "cardboard";
box[0] = 'meow';
box['^&*'] = "testing 123";

for (var key in box) {
  console.log(key);
  //'material','0','^&*'
}

for (var key in box) {
  console.log(box[key]);
  //'material','0','^&*'
}
```
