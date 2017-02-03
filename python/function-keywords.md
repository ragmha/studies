## Keywords / functions
*   print - print output to the screen
    - use a `,` to keep output on the same line

*   datetime library is used to for datetime operations
    - datetime.now -> current timestamp

*   raw_input() -> used to receive input from the user and waits for the enter key

*   math module -> math operations

*   can import whole modules or just a function
   - import math -> import math module, use functions like math.sqrt() (Generic import)
   - from math import sqrt -> import the sqrt function, now use it as sqrt()
   - from math import * -> import all the functions from the math module (Universal import)

*   max -> return maximum of variable amount of arguments

*   min -> return minimum of variable amount of arguments

*   abs -> return absolute value of a number

*   type -> return the type of the argument received

*   del keyword to delete dictionary elements

*   .remove to remove list items

*   range has 3 types
  - range(stop)
  - range(start, stop) -> start at 0, stop at stop - 1 ie range(0,3) -> [0,1,2]
  - range(start, stop, step)

*   zip -> create pairs for elements when passed 2 lists
  - it will stop at the shorter list
  - can handle more than 2 lists

*   int() -> turn non-integer into an integer using base 10, optional 2nd parameter for base the number is in

*   pass -> doesnt do anything, skip over areas of code that expect an expression (stub kind of thing)

*   divmod returns a tuple containing the quotient and remainder divmod(177, 10) -> (17, 7  )

*   pow(a,b) -> calculate a to the power of b. pow(a,b,m) -> a to the power of b, mod m

*   sorted(iterable) -> takes any iterable and sorts it

*   isintance(<variable>, <instance-to-check>) -> check if the variable is an instance of the the object we specified
