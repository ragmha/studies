# Asymptotic Performance


```swift

void Loop() {
  var counter = 0; // 1
  while (counter < N)// 1 {
    Console.WriteLine(counter); // 1
    counter = counter + 1; // 2
  } // N
}
```
#### Complexity(N)
> 1+4N (LINEAR EXECUTION TIME)

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

#### Complexity(N)
> 2 + 3N + 4N^2 (N^2)

## You can scale up and down depending on the hardware
