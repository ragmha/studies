# Native Properties

```
var box = [];

box['size'] = true;

box['0'] = 'meow';

box.length; //1

```

```
var box = [];

box['0'] = 'meow';
box[3] = {'babyBox': true}

box['length']; // 4 ~ 'length' is similar to .length

```

```
var box = [];

box['0'] = 'meow';
box[1] = {'babyBox': true}

box[length]; // undefined

```

```
var box = [];

box['0'] = 'meow';
box[3] = {'babyBox': true}

box[box.length-1]; // {'babyBox': true}

```

```
box.length === box['length']
```
