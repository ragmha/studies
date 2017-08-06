// Polyfill async Iterator
Symbol.asyncIterator =
  Symbol.asyncIterator || Symbol.for('Symbol.asyncIterator');

const delay = ms =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

/* =>
Yeilds 3 promises
*/
async function* someGenerator() {
  await delay(1000);
  yield 1;
  await delay(1000);
  yield 2;
  await delay(1000);
  yield 3;
}

/* =>
for await gets the Promise waits until the Promise is resolved
  then resumes the generator which returns the second Promise and so on..
*/
async function main() {
  for await (const value of someGenerator()) {
    console.log(value);
  }
}

main(); /* =>
1
2
3
*/

// What happens in the main function
async function mainA() {
  const generator = someGenerator();
  while (true) {
    const { value, done } = await generator.next();
    if (done) break;
    console.log(value);
  }
}

mainA(); /* =>
1
2
3
*/
