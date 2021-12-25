/**
* Exercise 7:
*
* Implement a class BitSequence that stores a sequence of 64 bits packed in a
* Long value. Supply apply and update operators to get and set an individual bit.
*
**/

object Ex7 extends App {

  class BitSequence(private var b: Long = 0L) {

    def apply(i: Int): Int = (((1L << i) & b) >> i).asInstanceOf[Int]

    def update(i: Int, value: Int) {
      if (value == 1)
        b |= (1L << i)
      else if (value == 0)
        b &= ~(1L << i)
    }

  }
  
}
