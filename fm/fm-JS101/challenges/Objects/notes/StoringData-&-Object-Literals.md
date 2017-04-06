# Storing Data

```
var box = {};

//storing a string
box["material"] = "cardboard";

//storing an object
box["size"] = {
  "height" : 2,
  "width" : 80
}

//storing a method/function
box.area = function() {
  return box.size.height * box.size.width;
}

// method: property on an object that's a function

// in browser everything is attached to the window object, so everything is a method maybe 😮
```


# Object literals

```
var box = {
  size : 9,
  '~/ [."4':  "meow";
};

box['size']; //9
box ['~/ [."4']; // "meow";

```
