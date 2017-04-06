// Create linear data flow with container style types (Box)

/*
 Map does more than Iteration,
in this example we see map does composition within a context(BOX)
a.k.a The Identity functor or Box :D
*/

// part 1

// const nextCharForNumberString = str => {
//   const trimmed = str.trim();
//   const number = parseInt(trimmed);
//   const nextNumber = number + 1;
//   return String.fromCharCode(nextNumber);
// };

// part 2 (refactoring part 1) CONFUSING!

// const nextCharForNumberString = str =>
//   String.fromCharCode(parseInt(str.trim()) + 1);

// part 3 Put a string in a box :D (refactoring part 2)

// Capturing each assignment in minial context
// We are composing here with map
// const nextCharForNumberString = str => [ str ]
//   .map(s => s.trim())
//   .map(s => parseInt(s))
//   .map(i => i + 1)
//   .map(i => String.fromCharCode(i));

// part 4 Creating a type Box (making it formal :D)

// const Box = x => ({ map: f => Box(f(x)), inspect: () => `Box(${x})` });
//
// const nextCharForNumberString = str => Box(str)
//   .map(s => s.trim())
//   .map(s => parseInt(s))
//   .map(i => i + 1)
//   .map(i => String.fromCharCode(i));

// part 5 unified method calls and function calls

const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`
});

const nextCharForNumberString = str => Box(str)
  .map(s => s.trim())
  .map(s => parseInt(s))
  .map(i => i + 1)
  .map(i => String.fromCharCode(i))
  .fold(c => c.toLowerCase());

const result = nextCharForNumberString(' 64 ');

console.log(result); // a
