/*
  Description:

  Rewriting selfies

  Let's get rid of the
  self
  usage, by using arrow functions!
  This can be achieved without arrow functions as well, but the point would be
  to learn the differences.

  Reference:
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

*/
function Counter() {
  this.count = 0;

  this.updateCount = () => this.count++;
}

// Test
// Counter
var counter = new Counter();
counter.count; // => 0
counter.updateCount();
counter.count; // => 1
//
// Counter2
var counter2 = new Counter();
counter2.count; // => 0
counter.count; // => 1
