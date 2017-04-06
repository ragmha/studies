# Do's & Don'ts

```
var box = {};

box['material'] = "cardboard";

var key = 'material';

box['key']; //undefined
box.key; //undefined
box[key]; //cardboard
```

# non-valid characters
```
var box = {};
box['material'] = "cardboard";
box[0] = 'meow';
box['^&*'] = "testing 123";

var test = box['^&*'];

```
# THE RULES

## DOTS

* strings ✔️

* numbers ❌

* quotations ❌

* weird characters ❌

* expressions ❌

## DOTS

* strings ✔️

* numbers ✔️

* quotations ✔️

* weird characters ✔️

* expressions ✔️
