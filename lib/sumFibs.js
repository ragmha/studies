/*
Sum All Odd Fibonacci Numbers
=====================================================================

- Given a positive integer num, return the sum of all odd Fibonacci numbers that
 are less than or equal to num.

- The first two numbers in the Fibonacci sequence are 1 and 1. Every additional
number in the sequence is the sum of the two previous numbers. The first six
numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

- For example, sumFibs(10) should return 10 because all odd Fibonacci numbers
less than 10 are 1, 1, 3, and 5.

- Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your
own code.

- Here are some helpful links:

  * Remainder
*/

const oddFib = num => {
	let arrFib = [1];

	for (let i = 1; i <= num; ) {
		arrFib.push(i);
		i = arrFib[arrFib.length - 1] + arrFib[arrFib.length - 2];
	}

	return arrFib.filter(num => num % 2 !== 0);
};

const sumFibs = num => oddFib(num).reduce((prev, current) => prev + current);

// TEST
sumFibs(1000); // => 1785
sumFibs(4000000); // => 4613732
sumFibs(4); // => 5
sumFibs(75024); // => 60696
sumFibs(75025); // => 135721
