# Big O

> Consider a function, f(N) ... f(N) = N + 1

If there exist:

*   a function, g(N)      g(N) = N

*   a constant, say c     f(N) < 1.5g(N)

*   another constant, n   when N > 1

so that f(N) < c.g(N) when N > n
... then f(N) is O(g(N)) i.e O(N)



```c++

bool ContainsNeedle(int needle, List<int> haystack)
{
  foreach (var sample in haystack)
  {
    if ( sample == needle)
      return true;
  }
  return false;
}


```

### Complexity(N):
```
1.5g(N) = 1.5N

At most N. 1 +1
 f(N)  = N + 1

g(N) = N

f(N) < 1.5g(N)  when N > 1

O(g(N))
O(N)
```

## Binary Search

// Assuming our N entries in haystack is order
Linear search: O(N)

Number of comparisons = Number of halving of N = log2 N

Complexity: O(log2 N)

*   Find the lowest possible worst-case
*   Tight bound


## Logarithms

```
2.2.2.2.2.2.2 = 2^7 = 128

2.2.2.2.2.2.2.2 = 2^8 = 256

2.2.2.2.2.2.2.2.2 = 2^9 = 512

2^N

2^N = 4096

log2(4096) = 12 // base 2
2^12 = 4096

```
