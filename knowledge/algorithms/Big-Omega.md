# Big Omega

> Consider a function, f(N) ... f(N) = N + 1

If there exist:

*   a function, g(N)      g(N) = N  // lower bound

*   a constant, say c     f(N) > 1.5g(N)

*   another constant, n   when N > 1

so that f(N) > c.g(N) when N > n
... then f(N) is Ω(g(N)) i.e Ω(N)

*   Search algorithms: Ω(1)

*   Simple loop: Ω(N)

*   Pair generation: Ω(N^2)
