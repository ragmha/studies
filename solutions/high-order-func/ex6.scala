/**
* Exercise 6:
*
* Modify the previous function to return the input at which the output is largest.
* For example, largestAt(x => 10 * x - x * x, 1 to 10) should return 5. Don’t
* use a loop or recursion.
*
**/

// 1
def largestAt(fun: (Int) => Int, inputs: Seq[Int]) = {
inputs
  .map(a => (fun(a),a))
  .reduceLeft((a, b) => if (a._1 > b._1) a else b)
  ._2
}

largestAt(x => 10 * x - x * x, 1 to 10) // => 5

// 2
def largestAt(fun: (Int) => Int, inputs: Seq[Int]) = {
fun(inputs.reduceLeft((x, y) => if (fun(x) > fun(y)) x else y))
}

largestAt(x => 10 * x - x * x, 1 to 10) // => 5
