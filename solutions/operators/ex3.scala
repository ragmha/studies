/**
* Exercise 3:
*
* Implement the Fraction class with operations + - * /.Normalize fractions, for
* example, turning 15/–6 into –5/2. Divide by the greatest common divisor, like
* this:
  class Fraction(n: Int, d: Int) {
    private val num: Int = if (d == 0) 1 else n * sign(d) / gcd(n, d);
    private val den: Int = if (d == 0) 0 else d * sign(d) / gcd(n, d);
    override def toString = s"$num/$den"
    def sign(a: Int) = if (a > 0) 1 else if (a < 0) -1 else 0
    def gcd(a: Int, b: Int): Int = if (b == 0) abs(a) else gcd(b, a % b)
    ...
  }
*
**/

object Ex3 extends App {

  class Fraction(n: Int, d: Int) {
    private val num: Int = if(d == 0) 1 else n * sign(d) / gcd(n, d)
    private val den: Int = if(d == 0) 0 else d * sign(d) / gcd(n, d)

    def sign(a: Int) = if (a > 0) 1 else if (a < 0) -1 else 0

    def gcd(a:Int, b: Int): Int = if (b == 0) math.abs(a) else gcd(b, a % b)

    def /(other: Fraction) = new Fraction(num * other.den, den * other.num)
    def *(other: Fraction) = new Fraction(num * other.num, den * other.den)
    def +(other: Fraction) = new Fraction(num * other.den + other.num * den, den * other.den)
    def -(other: Fraction) = new Fraction(num * other.den - other.num * den, den * other.den)

    override def toString = num + "/" + den

  }

  object Fraction {
    def apply(n: Int, d: Int) = new Fraction(n , d)
    def unapply(input: Fraction) = if (input.den == 0) None else Some((input.num, input.den))
  }


  val f1 = new Fraction(4, -5)
  val f2 = new Fraction(-8, 3)

  println(f1)
  println(f2)
  println((f1/f2).toString == "3/10" )
}
