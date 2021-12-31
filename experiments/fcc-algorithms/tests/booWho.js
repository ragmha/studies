const assert = require("assert");
const booWho = require("../lib/booWho");

describe("#booWho()", () => {
  it("should return true", () => {
    assert.equal(booWho(true), true);
    assert.equal(booWho(false), true);
  });

  it("should return false", () => {
    assert.equal(booWho([1, 2, 3]), false);
    assert.equal(booWho([].slice), false);
    assert.equal(booWho({ a: 1 }), false);
    assert.equal(booWho(1), false);
    assert.equal(booWho(NaN), false);
    assert.equal(booWho("a"), false);
    assert.equal(booWho("true"), false);
    assert.equal(booWho("false"), false);
  });
});
