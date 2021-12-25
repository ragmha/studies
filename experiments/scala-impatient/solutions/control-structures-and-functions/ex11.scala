/**
* Exercise 11:
* Define a string interpolator date so that you can define a java.time.LocalDate
* as date"$year-$month-$day". You need to define an “implicit” class with a date
* method, like this:
  implicit class DateInterpolator(val sc: StringContext) extends AnyVal {
    def date(args: Any*): LocalDate = . . .
  }
*
* args(i) is the value of the ith expression. Convert each to a string and then
* to an integer, and pass them to the LocalDate.of method. If you already know
* some Scala, add error handling. Throw an exception if there aren’t three
* arguments, or if they aren’t integers, or if they aren’t separated by dashes.
* (You get the strings in between the expressions as sc.parts.)
*
**/

import java.time.LocalDate

object Helper {
  implicit class DateInterpolator(val sc: StringContext) extends AnyVal {
    def date(args: Any*): LocalDate =  {

      if (args.length != 3) throw new IllegalArgumentException("Required 3 arguments")

      for(c <- sc.parts) if(c > 0 && !c.equals("-")) throw new IllegalArgumentException("must be yyyy-mm-dd")

      val (year, month, day) = (args(0).toString.toInt, args(1).toString().toInt, args(2).toString().toInt)

      LocalDate.of(year, month, day)
    }
  }
}

// Test
import Helper._

val (year, month, day) = ("2017", "03", "28")

date"$year-$month-$day" //=> res0: java.time.LocalDate = 2017-03-28
