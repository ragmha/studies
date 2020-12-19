export const isUnique2 = (str: string): boolean => {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str.charAt(i) === str.charAt(j)) {
        return false
      }
    }
  }
  return true
}
