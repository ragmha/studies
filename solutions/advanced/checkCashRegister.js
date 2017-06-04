/*
Exact Change
================================================================================

- Design a cash register drawer function checkCashRegister() that accepts purchase
price as the first argument (price), payment as the second argument (cash), and
cash-in-drawer (cid) as the third argument.

- cid is a 2D array listing available currency.

- Return the string "Insufficient Funds" if cash-in-drawer is less than the change
due. Return the string "Closed" if cash-in-drawer is equal to the change due.

- Otherwise, return change in coin and bills, sorted in highest to lowest order.

- Remember to use Read-Search-Ask if you get stuck. Try to pair program.
Write your own code.

- Here are some helpful links:

- Global Object
*/

// Denomination
const denom = [
	{ name: 'ONE HUNDRED', val: 100.0 },
	{ name: 'TWENTY', val: 20.0 },
	{ name: 'TEN', val: 10.0 },
	{ name: 'FIVE', val: 5.0 },
	{ name: 'ONE', val: 1.0 },
	{ name: 'QUARTER', val: 0.25 },
	{ name: 'DIME', val: 0.1 },
	{ name: 'NICKEL', val: 0.05 },
	{ name: 'PENNY', val: 0.01 }
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
		return 'Closed';
	}

	// Handle obvious change
	if (register.total < change) {
		return 'Insufficient Funds';
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
		return 'Insufficient Funds';
	}

	return changeArr;
};

// TEST
checkCashRegister(19.5, 20.0, [
	['PENNY', 1.01],
	['NICKEL', 2.05],
	['DIME', 3.1],
	['QUARTER', 4.25],
	['ONE', 90.0],
	['FIVE', 55.0],
	['TEN', 20.0],
	['TWENTY', 60.0],
	['ONE HUNDRED', 100.0]
]); // => an array.
checkCashRegister(19.5, 20.0, [
	['PENNY', 0.01],
	['NICKEL', 0],
	['DIME', 0],
	['QUARTER', 0],
	['ONE', 0],
	['FIVE', 0],
	['TEN', 0],
	['TWENTY', 0],
	['ONE HUNDRED', 0]
]); // => a string.
checkCashRegister(19.5, 20.0, [
	['PENNY', 0.5],
	['NICKEL', 0],
	['DIME', 0],
	['QUARTER', 0],
	['ONE', 0],
	['FIVE', 0],
	['TEN', 0],
	['TWENTY', 0],
	['ONE HUNDRED', 0]
]); // => a string.
checkCashRegister(19.5, 20.0, [
	['PENNY', 1.01],
	['NICKEL', 2.05],
	['DIME', 3.1],
	['QUARTER', 4.25],
	['ONE', 90.0],
	['FIVE', 55.0],
	['TEN', 20.0],
	['TWENTY', 60.0],
	['ONE HUNDRED', 100.0]
]); // => [["QUARTER", 0.50]].
checkCashRegister(3.26, 100.0, [
	['PENNY', 1.01],
	['NICKEL', 2.05],
	['DIME', 3.1],
	['QUARTER', 4.25],
	['ONE', 90.0],
	['FIVE', 55.0],
	['TEN', 20.0],
	['TWENTY', 60.0],
	['ONE HUNDRED', 100.0]
]); // => [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].
checkCashRegister(19.5, 20.0, [
	['PENNY', 0.01],
	['NICKEL', 0],
	['DIME', 0],
	['QUARTER', 0],
	['ONE', 0],
	['FIVE', 0],
	['TEN', 0],
	['TWENTY', 0],
	['ONE HUNDRED', 0]
]); // => "Insufficient Funds".
checkCashRegister(19.5, 20.0, [
	['PENNY', 0.01],
	['NICKEL', 0],
	['DIME', 0],
	['QUARTER', 0],
	['ONE', 1.0],
	['FIVE', 0],
	['TEN', 0],
	['TWENTY', 0],
	['ONE HUNDRED', 0]
]); // => "Insufficient Funds".
checkCashRegister(19.5, 20.0, [
	['PENNY', 0.5],
	['NICKEL', 0],
	['DIME', 0],
	['QUARTER', 0],
	['ONE', 0],
	['FIVE', 0],
	['TEN', 0],
	['TWENTY', 0],
	['ONE HUNDRED', 0]
]); // => "Closed".
