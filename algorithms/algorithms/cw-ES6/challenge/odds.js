/*
Are arrow functions odd?

Description:

Time to test your basic knowledge in functions! Return the odds from a list:

odds([1,2,3,4,5]) #=> [1,3,5]
*/


let odds = values => values.filter(value => value % 2);



// Tests
odds([]) // => []
odds([1, 2, 3, 4, 5, 6]) // => [1, 3, 5]
