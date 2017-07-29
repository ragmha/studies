// Palindrome Permuation

const palindromePermuation = str => {
  if (!str) return false;

  str = str.toLowerCase();

  const letterMap = new Set();

  for (const letter of str) {
    if (letter !== " ") {
      if (letterMap.has(letter)) letter.delete(letter);
      else letterMap.add(letter);
    }
  }
  return letterMap.size <= 1;
};

console.log(palindromePermuation("Tact Coa"), "true");
