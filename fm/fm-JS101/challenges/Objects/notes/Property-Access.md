# Data

```
// Empty object storing it in a variable called "box"

var box = {}
```

# Assignment w/ Dots

```
var box = {};
box.material = "cardboard";


var box = {
  "material" : "cardboard"
};

What are some other times you have seen dots in JS?
- Add or access property

// whatever is left to the dot(.), is an object [Array or function].

```

# Acess w/ Dots

```
var box = {};
box.material = "cardboard";

var cb = box.material;

cb; // "cardboard"

box.material = "titanium";

cb; // "cardboard"
^
This is an example of storing things by value, we are looking in memory what we stored value with no reference to box.material. It's not true for (objects,arrays and function)

```

# Access and Assignment

```
var box = {};
box.material = "cardboard";
box.material; // "cardboard"
box.size; // undefined

undefined is it's own type , don't quote it
```
