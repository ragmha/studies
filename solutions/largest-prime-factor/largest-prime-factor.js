/*
  Largest prime factor
  Problem 3

  The prime factors of 13195 are 5, 7, 13 and 29.

  What is the largest prime factor of the number 600851475143 ?

  E.g Prime factors of 132
    132 = 2 * 66
    66  = 2 * 33
    33  = 3 * 11
    11 = PRIME NUMBER
    factors(132) = 2, 2, 3, 11
*/

const lPrimeFactor = num => {
  let i = 2
  while (i <= num) (num % i === 0) ? (num /= i) : i++
  return i
}

console.log(lPrimeFactor(600851475143)) // => 6857
