const assert = require("assert");
const chunkArrayInGroups = require("../lib/chunkArrayInGroups");

describe("#chunkArrayInGroups()", () => {
  it("should return array in groups of 2", () => {
    assert.deepEqual(chunkArrayInGroups(["a", "b", "c", "d"], 2), [
      ["a", "b"],
      ["c", "d"]
    ]);

    assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2), [
      [0, 1],
      [2, 3],
      [4, 5]
    ]);

    assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2), [
      [0, 1],
      [2, 3],
      [4, 5],
      [6, 7],
      [8]
    ]);
  });

  it("should return array in groups of 3", () => {
    assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3), [
      [0, 1, 2],
      [3, 4, 5]
    ]);
    assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3), [
      [0, 1, 2],
      [3, 4, 5],
      [6]
    ]);
  });

  it("should return array in groups of 4", () => {
    assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4), [
      [0, 1, 2, 3],
      [4, 5]
    ]);

    assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4), [
      [0, 1, 2, 3],
      [4, 5, 6, 7],
      [8]
    ]);
  });
});
