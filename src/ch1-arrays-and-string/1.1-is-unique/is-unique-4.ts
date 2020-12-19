export const isUnique4 = (str: string): boolean => {
  const sortedString = str.split('').sort().join('')

  for (let i = 1; i < str.length; i++) {
    if (sortedString.charAt(i) === sortedString.charAt(i - 1)) {
      return false
    }
  }

  return true
}
