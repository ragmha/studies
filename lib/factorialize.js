/*
Factorialize a Number
=====================================================================
- Return the factorial of the provided integer.

- If the integer is represented with the letter n, a factorial is the product of
 all positive integers less than or equal to n.

- Factorials are often represented with the shorthand notation n!

- For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

*/

// My Initial solution

// const factorialize = num => {
//   if (num <= 0) return 1;
//   else return num * factorialize(num-1);
// }


// Trying to use tail-recursive helper

const factorialize = num => factorializeRec(num, 1);

const factorializeRec = (x, acc) => {
  if (x <= 1) return acc;
  else return factorializeRec(x - 1, x * acc);
}



// Test
factorialize(5) // => 120
factorialize(10) // => 3628800
