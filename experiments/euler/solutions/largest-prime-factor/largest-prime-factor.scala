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

def factors(num : Long): List[Long] = {
  val exists= (2L to math.sqrt(num).toLong).find(num % _ == 0)
  exits match {
    case Some(d) => d :: factors(num / d)
    case None => List(num)
  }
}

factors(600851475143L).max // => res0: Long = 6857
