/**
* Exercise 1:
*
* Write a function values(fun: (Int) => Int, low: Int, high: Int) that yields a
* collection of function inputs and outputs in a given range. For example,
* values(x => x * x, -5, 5) should produce a collection of pairs (-5, 25),
* (-4, 16), (-3, 9), . . . , (5, 25).
*
**/

// 1
def values(fun: (Int) => Int, low: Int, high: Int) =
for(v <- low to high) yield (v, fun(v))

values(x => x * x, -5, 5)
//=> Vector((-5,25), (-4,16), (-3,9), (-2,4), (-1,1), (0,0), (1,1), (2,4), (3,9), (4,16), (5,25))

// 2
def values(fun: (Int) => Int, low: Int, high: Int) =
(low to high) map { x => (x, fun)}

values(x => x * x, -5, 5)
//=> Vector((-5,25), (-4,16), (-3,9), (-2,4), (-1,1), (0,0), (1,1), (2,4), (3,9), (4,16), (5,25))
