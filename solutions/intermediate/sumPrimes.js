/*
Sum All Primes
=====================================================================

- Sum all the prime numbers up to and including the provided number.

- A prime number is defined as a number greater than one and having only two
divisors, one and itself. For example, 2 is a prime number because it's only
divisible by one and two.

- The provided number may not be a prime.

- Remember to use Read-Search-Ask if you get stuck. Try to pair program.
Write your own code.

- Here are some helpful links:
  * For Loops
  * Array.prototype.push()
*/

const primes = num => {
	let arr = Array.from({ length: num + 1 }, (v, k) => k).slice(2);
	return arr.filter(n => {
		let m = n - 1;
		while (m > 1 && m >= Math.sqrt(n)) {
			if (n % m === 0) {
				return false;
				m--;
			}
			return true;
		}
	});
};

const sumPrimes = num => primes(num).reduce((current, prev) => current + prev);

// TEST
sumPrimes(10); // => 17
console.log(sumPrimes(977)); // => 73156
