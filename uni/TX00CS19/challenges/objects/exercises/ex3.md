3. Define an Origin object that extends java.awt.Point. Why is this not actually a good idea? (Have a close look at the methods of the Point class.)

```scala
object Origin extends java.awt.Point {}
println(Origin) //=> [x=0,y=0]
Origin.move(2, 2)
println(Origin) //=> [x=2,y=2]
```

> Because Point class has mutation method available called move
