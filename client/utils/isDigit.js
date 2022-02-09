// This is the same as /slicer/utils/isNumber
// They should be pulling from the same place
export function isDigit(word) {
  const regex = /\d/
  return Boolean(word.match(regex))
}
