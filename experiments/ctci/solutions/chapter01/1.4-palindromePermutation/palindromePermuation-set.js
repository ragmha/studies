// Palindrome Permuation

const palindromePermuation = str => {
  if (!str) return false;

  str = str.toLowerCase();

  const letterMap = new Set();

  for (const letter of str) {
    if (letter !== " ") {
      if (letterMap.has(letter)) letterMap.delete(letter);
      else letterMap.add(letter);
    }
  }
  return letterMap.size <= 1;
};

palindromePermuation("Tact Coa"); // => true

palindromePermuation("Tact boa"); // =>  false
