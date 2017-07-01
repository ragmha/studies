const assert = require("assert");
const updateInventory = require("../lib/updateInventory");

describe("#updateInventory()", () => {
  it("should return an array", () => {
    let curInv = [
      [21, "Bowling Ball"],
      [2, "Dirty Sock"],
      [1, "Hair Pin"],
      [5, "Microphone"]
    ];

    let newInv = [
      [2, "Hair Pin"],
      [3, "Half-Eaten Apple"],
      [67, "Bowling Ball"],
      [7, "Toothpaste"]
    ];
    assert.equal(Array.isArray(updateInventory(curInv, newInv)), true);
  });

  it("should return an array with length 6", () => {
    let curInv = [
      [21, "Bowling Ball"],
      [2, "Dirty Sock"],
      [1, "Hair Pin"],
      [5, "Microphone"]
    ];

    let newInv = [
      [2, "Hair Pin"],
      [3, "Half-Eaten Apple"],
      [67, "Bowling Ball"],
      [7, "Toothpaste"]
    ];

    assert.deepEqual(updateInventory(curInv, newInv).length, 6);
  });

  it("should return the same Inventory", () => {
    let curInv = [
      [21, "Bowling Ball"],
      [2, "Dirty Sock"],
      [1, "Hair Pin"],
      [5, "Microphone"]
    ];

    let curInv2 = [
      [2, "Hair Pin"],
      [3, "Half-Eaten Apple"],
      [67, "Bowling Ball"],
      [7, "Toothpaste"]
    ];

    let newInv2 = [
      [67, "Bowling Ball"],
      [2, "Hair Pin"],
      [3, "Half-Eaten Apple"],
      [7, "Toothpaste"]
    ];
    assert.deepEqual(updateInventory(curInv, []), curInv);

    assert.deepEqual(updateInventory([], curInv2), newInv2);
  });

  it("should return updated Inventory with no duplicates", () => {
    let curInv0 = [
      [21, "Bowling Ball"],
      [2, "Dirty Sock"],
      [1, "Hair Pin"],
      [5, "Microphone"]
    ];
    let curInv1 = [
      [2, "Hair Pin"],
      [3, "Half-Eaten Apple"],
      [67, "Bowling Ball"],
      [7, "Toothpaste"]
    ];

    let newInv = [
      [88, "Bowling Ball"],
      [2, "Dirty Sock"],
      [3, "Hair Pin"],
      [3, "Half-Eaten Apple"],
      [5, "Microphone"],
      [7, "Toothpaste"]
    ];
    assert.deepEqual(updateInventory(curInv0, curInv1), newInv);

    let curInv2 = [
      [0, "Bowling Ball"],
      [0, "Dirty Sock"],
      [0, "Hair Pin"],
      [0, "Microphone"]
    ];

    let curInv3 = [
      [1, "Hair Pin"],
      [1, "Half-Eaten Apple"],
      [1, "Bowling Ball"],
      [1, "Toothpaste"]
    ];

    let newInv2 = [
      [1, "Bowling Ball"],
      [0, "Dirty Sock"],
      [1, "Hair Pin"],
      [1, "Half-Eaten Apple"],
      [0, "Microphone"],
      [1, "Toothpaste"]
    ];

    assert.deepEqual(updateInventory(curInv2, curInv3), newInv2);
  });
});
