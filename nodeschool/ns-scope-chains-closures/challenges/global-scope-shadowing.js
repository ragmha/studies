// GLOBAL SCOPE & SHADOWING

function foo() {
  var bar;
  quux = 'meow';
  function zip() {
    var quux;
  }
}
