/*
If we list all the natural numbers below 10 that are multiples of 3 or 5,
we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

const createArr = (num, arr=[]) => {
  for (let i = 0; i < num; i++) arr.push(i);
  return arr;
};

const multiples = num =>
          createArr(num)
          .filter(n => n % 3 === 0 || n % 5 === 0)
          .reduce((pre,curr)=> pre + curr, 0);

console.log(multiples(1000));
