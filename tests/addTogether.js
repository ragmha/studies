const assert = require("assert");
const addTogether = require("../lib/addTogether");

describe("#addTogether", () => {
  it("should return 5", () => {
    assert.equal(addTogether(2, 3), 5);
    assert.equal(addTogether(2)(3), 5);
  });

  it("should return undefined", () => {
    assert.equal(addTogether("http://bitly/IqT6zt"), undefined);
    assert.equal(addTogether(2, "3"), undefined);
    assert.equal(addTogether(2)([3]), undefined);
  });
});
