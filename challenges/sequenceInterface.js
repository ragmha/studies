// Sequence Interface

/**
 *  next(), which returns a boolean indicating whether there are more
    elements in the sequence, and moves it forward to the next
    element when there are.

 *  current(), which returns the current element, and should only be
   called after next() has returned true at least once.
 */

const logFive = sequence => {
  for (let i = 0; i < 5; i++) {
    if (!sequence.next()) break;
    console.log(sequence.current());
  }
};

class ArraySeq {
  constructor(array) {
    this.pos = -1;
    this.array = array;
  }

  next() {
    if (this.pos >= this.array.length - 1) return false;
    this.pos++;
    return true;
  }

  current() {
    return this.array[this.pos];
  }
}

class RangeSeq {
  constructor(from, to) {
    this.pos = from - 1;
    this.to = to;
  }

  next() {
    if (this.pos >= this.to) return false;
    this.pos++;
    return true;
  }

  current() {
    return this.pos;
  }
}

logFive(new ArraySeq([1, 2, 3]));

logFive(new RangeSeq(100, 1000));
