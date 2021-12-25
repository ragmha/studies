/**
* Exercise 7:
*
* Implement a function that checks whether a card suit value from the
* preceding exercise is red.
*
**/

import CardSuite._

 def isRed(card: CardSuite) = card == Heart || card == Diamond

 println(isRed(CardSuite.Club)) // => false
 println(isRed(CardSuite.Diamond)) // => true
 println(isRed(CardSuite.Heart))  // => true
 println(isRed(CardSuite.Spade)) // => false
