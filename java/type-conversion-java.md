# Type Conversion

## Implicit type conversion

>  Conversions performed automatically by the compiler

```java
int iVal = 50;
long lVal = iVal;
```

*   Widening conversions are automatic
*   Mixing integer sizes
    *   Uses largest integer in equation
*   Mixed floating point sizes
    *   Uses double
*   Mixed integer and floating point
    *   Uses largest floating point in equation


## Explicit type conversion

>  Conversions performed explicitly in code with cast operator

```java
long lVal = 50;
int iVal = (int) lVal;
```

*   Can perform widening and narrowing
*   Floating point to integer drops fraction
*   Use caution with narrowing conversions
*   Integer to floating point can lose precision
