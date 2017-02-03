# Big Theta

### Consider a function, f(N).. f(N)= 2 + 3N + 4N^2
> If there exists:

*   a function, g(N)  g(N) = N^2
*   two constants, say c1 and c2  3g(N) < f(N) < 5g(N)
*   another constant, n when N > 3

>so that c1.g(N)< f(N) < c2.g(N) when N > n
...then f(N) is ϴ(g(N))


```swift

void Loop() {
  var counter = 0; // 1
  while (counter < N)// 1 {
    Console.WriteLine(counter); // 1
    counter = counter + 1; // 2
  } // N
}
```
```
f(N)= 4N + 1

g(N)= N

3g(N)= 3N

5g(N)= 5N

3g(N) < f(N) < 5g(N)
```


*   From the graph we can see f(N) is between upper bound 5g(N) and lower bound 3g(N)

*   g(N) is used to describe the complexity of f(N)

*   f is ϴ(g(N)) which is ϴ(N) as g(N) is N

```swift

void createAllPairs() {
  var x = 0; // 1
  var y = 0; // 1
  while (x < N) {
    while (y < N)// 1 {
      Console.WriteLine("{0}, {1}", x, y); // 1
      y = y +1; // 1
    } // N
      x = x + 1; // 1
  } // N
}
```

```
5g(N) = 5N^2
f(N) = 2 + 3N + 4N^2
g(N) = N^2
3g(N) = 3N^2

3g(N) < f(N) < 5g(N) when N > 3

f is ϴ(g(N)) which is ϴ(N^2) as g(N) is N^2
```



## Constant complexity

```
19.000000...1
f(N) = 19
g(N) = 18.9999....1

f is ϴ(1)
```

## Is ϴ Cheating?

### ϴ(N)

c1 = 900
c2 = 903

### ϴ(N^2)

c1 = 1
c2 = 3


> ϴ(N^2) wins until N > 900, but is slower for linear for the above example
