/**
 * Returns an instance of itself, doesn't execut
 */
function* createLogger() {
  console.log('Start');
  yield; // => pauses our generator
  console.log('Second Block');
  yield; // => pauses our generator
  console.log('Third Block');
  yield; // => pauses our generator
  console.log('End');
}

const logger = createLogger();

// Excutes our logger
logger.next(); // => Start
logger.next(); // => Second Block
logger.next(); // => Third Block
logger.next(); // => End
