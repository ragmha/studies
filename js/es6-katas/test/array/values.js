// 43: array - `Array.prototype.values`
// To do: make all tests pass, leave the assert lines unchanged!
const assert = require('assert');

describe('`Array.prototype.values` returns an iterator for all values in the array', () => {

  xit('`values()` returns an iterator', function() {
    const arr = ['k', 'e', 'y'];
    const iterator = arr.values();
    iterator.next();
    iterator.next();
    iterator.next();

    assert.deepEqual(iterator.next(), {value: void 0, done: true});
  });

  xit('use iterator to drop first key', function() {
    const arr = ['keys', 'values', 'entries'];
    const iterator = arr.values();
    iterator.next();

    assert.deepEqual([...iterator], ['values', 'entries']);
  });

  xit('empty array contains no values', function() {
    const arr = [...[...[...[]]]];
    const values = [...arr.values()];

    assert.equal(values.length, 0);
  });

  xit('a sparse array without real values has values though', function() {
    const arr = [, ,];
    const keys = [...arr.values()];

    assert.deepEqual(keys, [void 0, void 0]);
  });

  xit('also includes holes in sparse arrays', function() {
    const arr = ['a', , 'c'];

    assert.deepEqual([...arr.values()], ['a', void 0, 'c']);
  });

});
