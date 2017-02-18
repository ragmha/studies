# Expressions and Equations 👌

## Haskell has no statements, only expressions! 😮
*   In an imperative language like C or Java,

    *   there are expressions that denote small scale computations (2*x), and

    *   statements that handle sequencing, looping, conditionals, and all the large scale operation of the program.

*   Pure functional programming languages don’t have any statements — no assignments, no jumps.

*   Instead, all computation is performed by evaluating expressions

## Examples of integer expressions
> An expression evaluates to a result (usually written e⇝r but we’ll use e -- > r). Haskell uses a similar notation for numbers and operators as most languages:

```haskell
  2 -- > 2
  3+4 -- > 7
  3+4*5    {equivalent to 3+(4*5)} -- > 23
  (3+4)*5   {equivalent to 7*5} -- > 35
```
## Syntax of expressions
*   Parentheses are used for grouping, just as in mathematics.

*   If you don’t need parentheses for grouping, they are optional.

*   Operators have precedence, e.g. `∗` has “**tighter**” precedence than `+`, so `2 + 3 * 4` means `2 + (3 * 4)`.


*   Use the [reference documentation](https://www.haskell.org/onlinereport/exps.html) for complete list of operators and their precedences, if you need them.

## Function applications
*   Expressions can contain function calls.

*   A function takes argument(s), performs some computation, and produces result(s).

*   The function abs gives the absolute value of a number.

*   To use a function, you apply it to an argument. Write the function followed by the argument, separated by a space.

```haskell
  abs 5 -- > 5
  abs (-6) -- > 6
```

## Parentheses are for grouping

### Good style

```haskell
  2+3*5
  2+(3*5) -- might be clearer to some readers
  abs 7
```

### You don’t need parentheses. The following are legal, but they look silly:

```haskell
  (2) + ((3+(((((5)))))))
  abs (5)
  abs (((5)))
```

## Functions with several arguments 👌

*   `min` and `max` are functions that take two arguments.

*   The `arguments` are given after the `function`, separated by **whitespace**.

*   Write `min 3 8`, don’t write `min(3, 8)`;

## Precedence of function application

*   Function application binds tighter than anything else.

*   So `f x + 3` means `(f x) + 3` and not `f (x+3)`

*   If an `argument` to a `function` is an `expression`, you’ll need to put it in `parentheses`.

## Equations

### Equations give names to values

*   Equations are used to give names to values.

```haskell
answer = 42
```

*   An equation in Haskell is a mathematical equation: it says that the left hand side and the right hand side denote the same value.
*   The left hand side should be a name that you’re giving a value to.
*   Correct: `x = 5 * y`
*   Incorrect: `2 * x = (3 * x )** 2` – Reassignment is not allowed in a pure FPL

## Equations are not assignments
*   A name can be given only one value.

*   Names are often called “variables”, but they do not vary.

*   In Haskell variables are constant!

```haskell
  n = 1    -- just fine!
  x = 3 * n  -- fine
  n = x    -- Wrong: can have only one definition of n
```
*   Once you give a value to a name, you can never change it!
*   This is part of the meaning of “pure” and “no side effects”

## What about n = n+1?
*   In imperative languages, we frequently say n := n + 1

*   This is an assignment, not an equation!

*   It means (1) compute the right hand side, using the old value of n; then (2) discard the old value of n and overwrite it with the new value.

*   There are no equations in imperative languages like C and Java.

*   In Haskell, it is valid to write `n = n + 1`.
    *   This is an equation, not an assignment!

*   It means: compute the value of n that has the property that `n = n + 1`.

*   Haskell will try, and it will fail.

## How can you compute without assignments?
*   Think of an assignment statement as doing three things:
    1.  It evaluates the right hand side: computing a useful value.

    2.  It discards the value of the variable on the left hand side: destroying a value that might or might not be useful.

    3. It saves the useful value of the RHS into the variable.

*   In a pure functional language

*   We never destroy old values.

*   We just compute new useful ones.

*   If the old value was truly useless, the garbage collector will reclaim its storage.
