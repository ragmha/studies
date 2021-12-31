const assert = require("assert");
const sym = require("../lib/sym");

describe("#sym()", () => {
  it("should return symmetric difference between two arrays", () =>
    assert.deepEqual(sym([1, 2, 3], [5, 2, 1, 4]), [3, 4, 5]));

  it("should return symmetric difference between three arrays", () => {
    assert.deepEqual(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]), [1, 4, 5]);
    assert.deepEqual(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]), [1, 4, 5]);
  });

  it("should return symmetric difference between four arrays", () =>
    assert.deepEqual(
      sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]),
      [2, 3, 4, 6, 7]
    ));

  it("should return symmetric difference between six arrays", () =>
    assert.deepEqual(
      sym(
        [3, 3, 3, 2, 5],
        [2, 1, 5, 7],
        [3, 4, 6, 6],
        [1, 2, 3],
        [5, 3, 9, 8],
        [1]
      ),
      [1, 2, 4, 5, 6, 7, 8, 9]
    ));

  it("should contain only three elements", () => {
    assert.deepEqual(sym([1, 2, 3], [5, 2, 1, 4]), [3, 4, 5]);
    assert.deepEqual(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]), [1, 4, 5]);
    assert.deepEqual(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]), [1, 4, 5]);
  });

  it("should contain only five elements", () =>
    assert.deepEqual(
      sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]),
      [2, 3, 4, 6, 7]
    ));

  it("should contain only eight elements", () =>
    assert.deepEqual(
      sym(
        [3, 3, 3, 2, 5],
        [2, 1, 5, 7],
        [3, 4, 6, 6],
        [1, 2, 3],
        [5, 3, 9, 8],
        [1]
      ),
      [1, 2, 4, 5, 6, 7, 8, 9]
    ));
});
