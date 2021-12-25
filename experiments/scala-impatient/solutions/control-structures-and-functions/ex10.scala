/**
* Exercise 10:
* Write a function that computes x^n, where n is an integer.
* Use the following recursive definition:
  • x^n = y · y if n is even and positive, where y = x^ n / 2.
  • x^n = x · xn – 1 if n is odd and positive.
  • x^0 = 1.
  • x^n = 1 / x–n if n is negative.
*
*  Don’t use a return statement.
*
**/

def compute(x: BigDecimal, n: Int): BigDecimal = {
  if (n == 0) 1
  else if (n < 0) 1 / compute(x, -n)
  else if (n % 2 == 0 && n > 0) { val y = compute(x, n/2);  y*y }
  else x * compute(x, n - 1)
}

compute(2, 1024)  //=> 1.797693134862315907729305190789023E+308: BigDecimal
compute(2, -1000) //=> 9.332636185032188789900895447238187E-302: BigDecimal
compute(-2, 100) //=> 1267650600228229401496703205376: BigDecimal
