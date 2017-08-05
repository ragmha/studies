// Advanced Reduce: Flatten, Flatmap and ReduceRight

// Flatten
let dataA = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let flattenData = dataA.reduce((acc, val) => acc.concat(val), []);

flattenData; // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// FlatMap
let input = [
  {
    title: 'Batman Begins',
    year: 2005,
    cast: [
      'Christian Bale',
      'Michael Caine',
      'Liam Neeson',
      'Katie Holmes',
      'Gary Oldman',
      'Cillian Murphy',
    ],
  },
  {
    title: 'The Dark Knight',
    year: 2008,
    cast: [
      'Christian Bale',
      'Heath Ledger',
      'Aaron Eckhart',
      'Michael Caine',
      'Maggie Gyllenhal',
      'Gary Oldman',
      'Morgan Freeman',
    ],
  },
  {
    title: 'The Dark Knight Rises',
    year: 2012,
    cast: [
      'Christian Bale',
      'Gary Oldman',
      'Tom Hardy',
      'Joseph Gordon-Levitt',
      'Anne Hathaway',
      'Marion Cotillard',
      'Morgan Freeman',
      'Michael Caine',
    ],
  },
];

let stars = input.reduce((acc, val) => {
  val.cast.forEach(star => {
    if (acc.indexOf(star) === -1) {
      acc.push(star);
    }
  });
  return acc;
}, []);

stars; /* =>
    [ 'Christian Bale',
    'Michael Caine',
    'Liam Neeson',
    'Katie Holmes',
    'Gary Oldman',
    'Cillian Murphy',
    'Heath Ledger',
    'Aaron Eckhart',
    'Maggie Gyllenhal',
    'Morgan Freeman',
    'Tom Hardy',
    'Joseph Gordon-Levitt',
    'Anne Hathaway',
    'Marion Cotillard' 
    ]
*/

/** 
 * Reduce Right
 * Handy when items specified executed right-to-left manner
 * 
*/
let dataB = [1, 2, 3, 4, '5'];
let sum = dataB.reduceRight((acc, val) => {
  return acc + val;
}, 0);

sum; // => 054321
