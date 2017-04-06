# Nesting

```js
var box = {};

box['innerbox'] = {};

box['innerbox'].full = true;

box['innerbox']['height'] = 10;

// do it here
box.otherBox = {};
var innerBox2 = 'otherBox';

box[innerBox2].full = false;
```
