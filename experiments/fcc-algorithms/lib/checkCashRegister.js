/*
Exact Change
================================================================================

- Returns the string "Insufficient Funds" if cash-in-drawer is less than the change
due. Return the string "Closed" if cash-in-drawer is equal to the change due. Otherwise, 
return change in coin and bills, sorted in highest to lowest order.
*/

// Denomination
const denom = [
  { name: "ONE HUNDRED", val: 100.0 },
  { name: "TWENTY", val: 20.0 },
  { name: "TEN", val: 10.0 },
  { name: "FIVE", val: 5.0 },
  { name: "ONE", val: 1.0 },
  { name: "QUARTER", val: 0.25 },
  { name: "DIME", val: 0.1 },
  { name: "NICKEL", val: 0.05 },
  { name: "PENNY", val: 0.01 }
];

const checkCashRegister = (price, cash, cid) => {
  let change = cash - price;

  // Transform CID array into drawer object
  let register = cid.reduce(
    (acc, curr) => {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    },
    { total: 0 }
  );

  // Handle exact change
  if (register.total === change) {
    return "Closed";
  }

  // Handle obvious change
  if (register.total < change) {
    return "Insufficient Funds";
  }

  let changeArr = denom.reduce((acc, curr) => {
    let value = 0;

    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;

      change = Math.round(change * 100) / 100;
    }

    if (value > 0) {
      acc.push([curr.name, value]);
    }
    return acc;
  }, []);

  if (changeArr.length < 1 || change > 0) {
    return "Insufficient Funds";
  }

  return changeArr;
};

module.exports = checkCashRegister;
