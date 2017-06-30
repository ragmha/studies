const assert = require("assert");
const checkCashRegister = require("../lib/checkCashRegister");

// TEST
describe("#checkCashRegister", () => {
  it("should return an array", () =>
    assert.deepEqual(
      checkCashRegister(19.5, 20.0, [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90.0],
        ["FIVE", 55.0],
        ["TEN", 20.0],
        ["TWENTY", 60.0],
        ["ONE HUNDRED", 100.0]
      ]),
      [["QUARTER", 0.5]]
    ));

  it("should return a Insufficient Funds", () => {
    assert.deepEqual(
      checkCashRegister(19.5, 20.0, [
        ["PENNY", 0.01],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0]
      ]),
      "Insufficient Funds"
    );

    assert.deepEqual(
      checkCashRegister(19.5, 20.0, [
        ["PENNY", 0.01],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0]
      ]),
      "Insufficient Funds"
    );

    assert.deepEqual(
      checkCashRegister(19.5, 20.0, [
        ["PENNY", 0.01],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 1.0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0]
      ]),
      "Insufficient Funds"
    );
  });

  it("should return a Closed", () => {
    assert.deepEqual(
      checkCashRegister(19.5, 20.0, [
        ["PENNY", 0.5],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0]
      ]),
      "Closed"
    );

    assert.deepEqual(
      checkCashRegister(19.5, 20.0, [
        ["PENNY", 0.5],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0]
      ]),
      "Closed"
    );
  });

  it("should return change in coin and bills ", () =>
    assert.deepEqual(
      checkCashRegister(19.5, 20.0, [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90.0],
        ["FIVE", 55.0],
        ["TEN", 20.0],
        ["TWENTY", 60.0],
        ["ONE HUNDRED", 100.0]
      ]),
      [["QUARTER", 0.5]]
    ));

  it("should return change in coin and bills", () =>
    assert.deepEqual(
      checkCashRegister(3.26, 100.0, [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90.0],
        ["FIVE", 55.0],
        ["TEN", 20.0],
        ["TWENTY", 60.0],
        ["ONE HUNDRED", 100.0]
      ]),
      [
        ["TWENTY", 60.0],
        ["TEN", 20.0],
        ["FIVE", 15.0],
        ["ONE", 1.0],
        ["QUARTER", 0.5],
        ["DIME", 0.2],
        ["PENNY", 0.04]
      ]
    ));
});
