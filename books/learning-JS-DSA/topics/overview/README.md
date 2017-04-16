# Overview 😼

## Operators

| Arithmetic operator |      Description                              |
| --------------------| ----------------------------------------------|
| +                   | Addition                                      |
| -                   | Subtraction                                   |
| *                   | Multiplication                                |  
| /                   | Division                                      |
| %                   | Modulus                                       |
| ++                  | Increment                                     |
| --                  | Decrement                                     |
| =                   | Assignment                                    |
| +=                  | Addition assignment (x += y) == (x = x + y)   |
| -=                  | Subtraction assignment (x -= y) == (x = x - y)|
| *=                  | Multiplication assignment (x *= y) == (x = x * y)|
| /=                  | Division assignment (x /= y) == (x = x / y) |
| %=                  | Remainder assignment (x %= y) == (x = x % y)|

| Comparison operator  |      Description                             |
| ---------------------| ---------------------------------------------|
| ==                   | Equal to                                     |
| ===                  | Equal to (value and object type both)        |
| !=                   | Not equal to                                 |
| >                    | Greater than                                 |
| >=                   | Greater than or equal to                     |
| <                    | Less than                                    |
| <=                   | Less than or equal to                        |

| Logical operator |  Description  |
| -----------------| ------------- |
| &&               |  And          |
| <code>&#124;&#124;</code>|  Or   |
| !                |  Not          |

| Bitwise operator    |  Description |
| --------------------| -----------|
| &                   | And        |
| <code>&#124;</code> | Equal to   |
| ~                   | Not        |
| ^                   | Xor        |
| <<                  | Left shift |
| >>                  | Right shift|

```javascript
// BIT OPERATOR Examples
(5 & 1) //=> 1
(5 | 1) //=> 5
(~5) //=> -6
(5 ^ 1) //=> 4
(5 << 1) //=> 10
(5 >> 1) //=> 2
```

## Truthy and falsy

| Value type    |  Result    |
| --------------| -----------|
| undefined     | false      |
| null          | false      |
| Boolean       | true is true and false is false |
| Number        | The result is false for +0, -0, or NaN; otherwise, the result is true |
| String | The result is false if the string is empty (length is 0); otherwise, the result is true (length > 1) |
| Object |  true |

## Functions of the equals operators (== and ===)
