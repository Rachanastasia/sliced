export function isDigit(word) {
  const regex = /\d/
  return Boolean(word.match(regex))
}
