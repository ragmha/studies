const Bluebird = require('bluebird');

/**
 * Awaiting a non Promise value
 */
async function mainA() {
  const x = await 42; // => Converts it to a resolved promise Promise.resolve(42)
  console.log(x);
}

mainA();

async function mainB() {
  console.log('Working...');
  await Bluebird.delay(
    2000
  ); /* => 
   Bluebird.delay returns a thenable with a then 
   method Promise.reoslve(Bluebird.delay(2000))

   await  pauses our async func for 2 seconds
   */
  console.log('Done...');
}

mainB(); /* =>
Working...
42
Done...
 */
