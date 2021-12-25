/**
* Exercise 5:
* Write a procedure countdown(n: Int) that prints the numbers from n to 0.
*
**/

def countdown(n: Int) {
  for (i <- n  to 0 by -1) println(i)
}

/* Test
countdown(5) /* =>
  5
  4
  3
  2
  1
  0
*/
