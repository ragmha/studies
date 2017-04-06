# Looping

```
Example

function AnimalMaker(name) {
  return {
    speak : function() {
      console.log('My name is', name);
    },
    name: name
  };
};

var animalNames = ['Sheep', 'Liger', 'Big Bird'];

var farm = [];


for (var i=0; i <animalNames.length; i++) {
   farm.push(AnimalMaker(animalNames[i]));
}

for (var i=0; i<farm.length; i++) {
  farm[i].speak();
}



```
