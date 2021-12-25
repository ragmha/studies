# Recursive Methods

```swift

int Faculty(int n) {
	if (n == 1) return 1;

	return n * Faculty(n-1);
}

```

## N recursion steps

For each step:
only a constant amount of instructions, say c

*   Complexity(N) = c.N = ϴ(N)

*   Upper bound constant : c +1

*   Lower bound constant : c -1
