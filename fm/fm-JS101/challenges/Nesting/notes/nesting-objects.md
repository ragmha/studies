# Nesting

```js
var box =  {};

box.innerbox = {};

box;  // => { "innerbox" : {} }
```

```js
var box =  {};

box['innerbox'] = {};

box;  // => { "innerbox" : {} }
```


```js
var box =  {};

box['innerbox'] = {};

box['innerbox']['full'] = true;
box;  /* => { "innerbox" : {
                            full : true
                           }
            } */
```

```js
var box =  {};

box.innerbox = {};

box.innerbox.full = true;
box;  /* => { "innerbox" : {
                            full : true
                           }
            } */
```


```js
var box =  {};

box.innerBox = {};

box.innerBox.full = true;

var myInnerBox = box.innerBox;

myInnerbox;  // => { full : true }
```


```js
var box =  {};

box.innerBox = {};

box.innerBox.babyBox = {};

box.innerBox['babyBox']; // => {}


box.innerBox['babyBox'].says = "What's up!?";

box.innerBox['babyBox']; //=> { says: "What's up!?"}

box;  /* => { "innerBox" : {
                   babyBox : {
                      says : "What's up!?"
                   }
                }
            }
      */
```

```js
var box =  {};

box.innerBox = {};

box.innerBox.babyBox = {};

box.innerBox['babyBox']; // => {}

var bb = box.innerBox['babyBox']; // {}

box.innerBox['babyBox'].says = "What's up!?";

box.innerBox['babyBox']; //=> { says: "What's up!?"}

bb; /* => { says: "What's up!?"}
because it is passed by reference
[TRUE FOR objects,arrays and functions] */

```


























 s
