# Using Classes

*   Use the new keyword to create a class (a.k.a an object)
    *   Allocates the memory described by the class
    *   Returns a reference to the allocated memory

```java
Flight helToSA;
helToSA = new Flight();
```
```
             ___________________
            |   passengers      |
            |       _______     |
            |      |   0   |    |
            |      |_______|    |
            |                   |
            |   seats           |
            |       _______     |
            |      |   150 |    |
            |      |_______|    |
            |___________________|
               ^
helToSA       /
 _____       /
|   --| ---
 _____
```


```java
Flight helToSA = new Flight();
Flight SAToBD =  new Flight();
```
```
             ___________________
            |   passengers      |
            |       _______     |
            |      |   0   |    |
            |      |_______|    |
            |                   |
            |   seats           |
            |       _______     |
            |      |   150 |    |
            |      |_______|    |
            |___________________|
               ^
helToSA       /
 _____       /
|   --| ---
 _____


              ___________________
             |   passengers      |
             |       _______     |
             |      |   0   |    |
             |      |_______|    |
             |                   |
             |   seats           |
             |       _______     |
             |      |   150 |    |
             |      |_______|    |
             |___________________|
              ^
SAToBD       /
 _____      /
|   --| ---
 _____
```

```java
Flight helToSA = new Flight();
Flight SAToBD =  new Flight();

SAToBD.add1Passenger();
```
```
             ___________________
            |   passengers      |
            |       _______     |
            |      |   0   |    |
            |      |_______|    |
            |                   |
            |   seats           |
            |       _______     |
            |      |   150 |    |
            |      |_______|    |
            |___________________|
               ^
helToSA       /
 _____       /
|   --| ---
 _____


              ___________________
             |   passengers      |
             |       _______     |
             |      |   1   |    |
             |      |_______|    |
             |                   |
             |   seats           |
             |       _______     |
             |      |   150 |    |
             |      |_______|    |
             |___________________|
              ^
SAToBD       /
 _____      /
|   --| ---
 _____
```
