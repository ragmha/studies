/**
* Exercise 5:
*
* Write a Scala application, using the App trait, that prints its command-line
* arguments in reverse order, separated by spaces. For example, scala Reverse
* Hello World should print World Hello.
*
**/

object Reverse extends App {
 if (args.length > 0) println(args.reverse.mkString(" "))
}
