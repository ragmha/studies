# Module Pattern

```js
var Module = function() {

  var privateProperty = 'foo';

  function privateMethod(args) {
    // do something
  };

  return {
    publicProperty: "",
    publicMethod: function(args) {
      // do something
    },
    privilegedMethod: function(args) {
      privateMethod(args);
    }
  };
};
```

## Example 1(CAR)

```js
var Car = function(){

  var gasolineLevel = 10;

  function useGas(amt){
    if (gasolineLevel - amt < 0){
      console.log("out of gas :[");
    } else {
      gasolineLevel -= amt;
    }
  };

  return {
      radioStation : "104.5",

      changeStation: function(station){
        this.radioStation = station;
      },

      go: function(speed){
        useGas(speed);
      }
  };
};
```
