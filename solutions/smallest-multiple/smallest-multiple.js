/*
2520 is the smallest number that can be divided by each of the numbers from 1 to
10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the
numbers from 1 to 20?
*/

const smallestMultiple = () => {
	let currentNum = 20;
	let currentDivisor = 20;
	let candidate;

	while (currentDivisor > 1) {
		if (currentNum % currentDivisor === 0) {
			currentDivisor--;
			candidate = currentNum;
		} else {
			currentNum += candidate;
		}
	}
	return currentNum;
};

console.log(smallestMultiple()); // => 232792560
