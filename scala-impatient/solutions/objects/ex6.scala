/**
* Exercise 6:
*
* Write an enumeration describing the four playing card suits so that the
* toString method returns ♣, ♦, ♥, or ♠.
*
**/

object X extends App {

  object CardSuite extends Enumeration {
    type CardSuite = Value
    val Club = Value("♣")
    val Diamond = Value("♦")
    val Heart = Value("♥")
    val Spade = Value("♠")
  }

  for(c <- CardSuite.values) println(c.id)
  /*
    0
    1
    2
    3
  */
}
