/**
* Exercise 7:
*
* It’s easy to get a sequence of pairs, for example:
  val pairs = (1 to 10) zip (11 to 20)
* Now, suppose you want to do something with such a sequence—say, add up the
* values. But you can’t do
  pairs.map(_ + _)
* The function _ + _ takes two Int parameters, not an (Int, Int) pair. Write a
* function adjustToPair that receives a function of type (Int, Int) => Int and
* returns the equivalent function that operates on a pair. For example,
* adjustToPair(_ * _)((6, 7)) is 42. Then use this function in conjunction with
* map to compute the sums of the elements in pairs.
*
**/

def adjustToPair(fun: (Int, Int) => Int) = (x: (Int, Int) => fun(x._1, x_.2))

val pairs = (1 to 10) zip (11 to 20)

pairs.map(adjustToPair(_ * _)) // => Vector(11, 24, 39, 56, 75, 96, 119, 144, 171, 200)

adjustToPair(_ * _)((6, 7)) // => 42
