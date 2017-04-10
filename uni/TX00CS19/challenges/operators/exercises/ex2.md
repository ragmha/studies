2. The BigInt class has a pow method, not an operator. Why didn’t the Scala library designers choose ** (as in Fortran) or ^ (as in Pascal) for a power operator?

> Precedence problem, pow operator must have top precedence
