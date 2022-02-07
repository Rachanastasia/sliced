import { DECIMALS_TO_FRACTIONS } from '../config/constants'

export function formatDisplayAmount(number) {
  const regex = /\./g
  const string = `${number}`
  const isFloat = regex.exec(string)
  if (isFloat) {
    const beforeDecimal = string.slice(0, isFloat.index)
    const afterDecimal = string.slice(isFloat.index + 1)
    const fraction = DECIMALS_TO_FRACTIONS[afterDecimal]
    if (fraction && Number(beforeDecimal)) return beforeDecimal + ' ' + fraction
    if (fraction) return fraction
  }
  return string
}
