function* createHello() {
  try {
    const word = yield;
    console.log(`Hello ${word}`);
  } catch (err) {
    console.error(`Error: ${err}`);
  }
}

const hello = createHello();
hello.next();
hello.throw('Something went Wrong!');
