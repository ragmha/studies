export const isUnique1 = (str: string): boolean => {
  const encounteredChars = new Map<string, boolean>()

  for (const char of str) {
    if (encounteredChars.get(char)) {
      return false
    }
    encounteredChars.set(char, true)
  }

  return true
}
