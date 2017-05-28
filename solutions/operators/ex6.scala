/**
* Exercise 6:
*
* Provide a class ASCIIArt whose objects contain figures such as
  ```

   /\_/\
  ( ' ' )
  (  -  )
   | | |
  (__|__)

  ```

Supply operators for combining two ASCIIArt figures horizontally
  ```

   /\_/\     -----
  ( ' ' )  / Hello \
  (  -  ) <  Scala |
   | | |   \ Coder /
  (__|__)    -----

  ```
or vertically. Choose operators with appropriate precedence.
*
**/


/**
  * Created by raghib on 4/10/17.
**/

object Ex6 extends App{
  class ASCIIArt(val art: String) {

    def +(other: ASCIIArt) = new ASCIIArt(
      art.split("\n")
          .zip(other.art.split("\n"))
          .map(x => x._1 + x._2)
          .mkString("\n")
    )

    def ^(other: ASCIIArt) = new ASCIIArt(
      art + "\n" + other.art
    )

    override def toString = art
  }

  val x = new ASCIIArt("""  /\_/\
|( ' ' )
|(  -  )
| | | |
|(__|__)""")

  val y = new ASCIIArt("""    -----
 / Hello \
<  Scala |
  \ Coder /
   -----""")

  println(x)
  println()
  println(x + y)
}
