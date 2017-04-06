# Brackets

```
var box = {};

box["material"] = "cardboard";

box.material; //"cardboard"

box["material"]; //"cardboard"

storing it as a value and referencing it later
var cb = box["material"];
```

# Variables

```
var box = {};

box["material"] = "cardboard";

var key = "material";

box[key]; //"cardboard"

```

# Expressions

```
var box = {};
box["material"] = "cardboard";

var func = function() {
  return "material";
};

box[func()]; // "cardboard"
```
