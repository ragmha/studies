/**
* Exercise 4:
*
* Implement a class Money with fields for dollars and cents. Supply +, -
* operators as well as comparison operators == and <. For example, Money(1, 75)
* + Money(0, 50) == Money(2, 25) should be true. Should you also supply * and /
* operators? Why or why not?
*
**/

/**
  * Created by raghib on 4/10/17.
**/
object Ex4 extends App {

  class Money(d: BigInt, c: BigInt) extends Ordered[Money] {

    def dollars: BigInt = d + c / 100
    val cents: BigInt = c % 100

    def toCents(): BigInt = dollars * 100 + cents
    def fromCents(cents: BigInt) = new Money(cents / 100, cents % 100)

    override def compare(other:Money):Int = toCents.compare(other.toCents)

    def +(other: Money) = fromCents(this.toCents + other.toCents)
    def -(other: Money) = fromCents(this.toCents - other.toCents)

    override def toString = d +  "." + c

  }

  object Money {
    def apply(d: Int, c: Int) = new Money(d, c)
  }

  val x = Money(1, 75)
  val y = Money(0, 50)

  println(x)
  println(y)

  println("Adding x and y ", x + y)
  println("Subtracting x from y ", x - y)
  println("Comparing x and y ", x > y)

}
