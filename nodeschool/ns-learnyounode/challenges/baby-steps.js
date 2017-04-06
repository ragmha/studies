// BABY STEPS

let args = process.argv;

let result = args.slice(2)
              .reduce((pre,curr)=> pre + +curr,0);

console.log(result);
