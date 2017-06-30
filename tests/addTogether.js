const assert = require("assert");
const addTogether = require("../lib/addTogether");

describe("#addTogether()", function() {
  it("should return 5", function() {
    assert.equal(addTogether(2, 3), 5);
    assert.equal(addTogether(2)(3), 5);
  });

  it("should return undefined", function() {
    assert.equal(addTogether("http://bitly/IqT6zt"), undefined);
    assert.equal(addTogether(2, "3"), undefined);
    assert.equal(addTogether(2)([3]), undefined);
  });
});
