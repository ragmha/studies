const assert = require("assert");
const telephoneCheck = require("../lib/telephoneCheck");

describe("#telephoneCheck()", () => {
  it("should return true for Valid US telephone number", () => {
    assert.equal(telephoneCheck("1 555-555-5555"), true);
    assert.equal(telephoneCheck("1 (555) 555-5555"), true);
    assert.equal(telephoneCheck("5555555555"), true);
    assert.equal(telephoneCheck("555-555-5555"), true);
    assert.equal(telephoneCheck("(555)555-5555"), true);
    assert.equal(telephoneCheck("1(555)555-5555"), true);
  });

  it("should return false for Invalid US telephone number", () => {
    assert.equal(telephoneCheck("555-5555"), false);
    assert.equal(telephoneCheck("5555555"), false);
    assert.equal(telephoneCheck("1 555)555-5555"), false);
    assert.equal(telephoneCheck("1 555 555 5555"), true);
    assert.equal(telephoneCheck("1 456 789 4444"), true);
    assert.equal(telephoneCheck("123**&!!asdf#"), false);
    assert.equal(telephoneCheck("55555555"), false);
    assert.equal(telephoneCheck("(6505552368)"), false);
    assert.equal(telephoneCheck("2 (757) 622-7382"), false);
    assert.equal(telephoneCheck("0 (757) 622-7382"), false);
    assert.equal(telephoneCheck("-1 (757) 622-7382"), false);
    assert.equal(telephoneCheck("2 757 622-7382"), false);
    assert.equal(telephoneCheck("10 (757) 622-7382"), false);
    assert.equal(telephoneCheck("27576227382"), false);
    assert.equal(telephoneCheck("(275)76227382"), false);
    assert.equal(telephoneCheck("2(757)6227382"), false);
    assert.equal(telephoneCheck("2(757)622-7382"), false);
    assert.equal(telephoneCheck("555)-555-5555"), false);
    assert.equal(telephoneCheck("(555-555-5555"), false);
    assert.equal(telephoneCheck("(555)5(55?)-5555"), false);
  });
});
