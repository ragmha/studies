# Parent vs Child Scope

```
var g = 'global';

function blender(fruit) {
  var b = fruit;
  var y = 'yogurt';


  function bs(){
    alert(b + ' and' + y + ' makes ' + b + ' swirl');
  }

  bs();
}

blender('blueberry'); // creates 2 scope

```

* Child scopes has access to the parent scope as well as the global scope whereas, parent scope and global scope doesn't have access to child scope.
