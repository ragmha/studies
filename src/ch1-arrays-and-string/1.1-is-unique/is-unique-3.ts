export const isUnique3 = (str: string): boolean => {
  const chars = new Set()

  for (let i = 0; i < str.length; i++) {
    if (chars.has(str.charAt(i))) {
      return false
    }
    chars.add(str.charAt(i))
  }

  return true
}
