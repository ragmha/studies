# 🗒 List

> A list is a representation of an ordered sequence of values where the same value may appear many times

|   Methods        |   Time complexity |
|  -------------   |   --------------- |
| `get(address)`   |       `O(1)`      |
| `push(value)`    |       `O(1)`      |
| `pop()`          |       `O(1)`      |
| `unshift(value)` |       `O(N)`      |
| `shift()`        |       `O(N)`      |

## 👍 Benifits
List are great for **fast access** and dealing with items at the end

## 👎 Drawbacks
List are not great at dealing with items not at the end of list and requires manual holding of memory addresses.

## API

* `get(address)` - Retrieves data from the list
    * Very fast memory access because track of address is kept directly
    * Access an item is constant `O(1)`

* `push(value)` - Adds value to the end
    * Simply adding value in the address at the end of list
    * Easier calculation since length is stored
    * Value is added and length is incremented
    * Pushing an item is constant `O(1)`

* `pop()` - Removes value from the end
    * Removing value in the address at the end of list
    * Easier calculation since length is stored
    * Value is removed and length is decremented
    * Poping an item is constant `O(1)`

* `unshift(value)` - Adds value to the start
    * Room is created for the value to be added 
    * Each item are iterated by one moving the previous value over
    * Last item added at the end of the list
    * Unshifting an item is linear `O(N)`

* `shift()` - Removes value from the start
   * First value is deleted 
   * Iterate through the list and move it down one address
   * Shifting an item is linear `O(N)`


