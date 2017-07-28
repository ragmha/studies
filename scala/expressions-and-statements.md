# Expressions and Statements

## Expressions
> Units of code that return a value

## Statements
> Units of code that do not return a value


# Scala favors expressions over statements

## Expressions Are Ubiquitous
> Anything that evaluates to a value is an expresssion

```scala
List("Mon","Tue","Wed","Thu","Fri") // expression
```

## Statements Are Less Common
> Printing to screen, writing to files - these are common use of statements

```scala
val weekDays = List("Mon","Tue","Wed","Thu","Fri") // statement
```

## Expressions Can Be Used as R-values
> On the right of an assignment operator used to define datas

## Expressions Can Be Passed into Functions
> Function parameters can be specified using expressions

```scala
println(weekDays.map(_ == "Mon"))
```

## Expressions Blocks Are Enclosed in {}
> The last expression in the block is the return value

```scala
val radius = 10;
val area = {
  val PI = 3.14;
  PI * radius * radius
}
```


## Expressions Blocks Can Have Nested Scope

```scala
val area = {
  val PI = 3.1;
  println(s"Inside scope 1, PI = $PI");
  {
      val PI = 3.14;
        println(s"Inside scope 2s, PI = $PI");
      PI * radius * radius
  }
  PI * radius * radius
}
```
