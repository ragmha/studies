5. Write a procedure countdown(n: Int) that prints the numbers from n to 0.

```scala
def countdown(n: Int) {
 for(i <- n to 0 by -1)) println(i)
}

countdown(5) /* =>
user: 5
user: 4
user: 3
user: 2
user: 1
user: 0
*/
```
