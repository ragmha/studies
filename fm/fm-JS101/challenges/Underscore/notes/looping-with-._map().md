# Looping with _.map()

```javascript
function AnimalMaker(name) {
  return {
    speak: function() {
      console.log("My name is ", name);
    }
  }
}

var animalNames = ["Smokey", "Fluffy", "Trigger"];

var farm = _.map(animalNames, AnimalMaker);

```
