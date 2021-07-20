import fractions from './decimalToFraction.json'

export function convertFloatToFraction(number){
     const regex = /\./g
     const string = number.toString()
     const isFloat = regex.exec(string)
     if (isFloat){
        const beforeDecimal = string.slice(0, isFloat.index)
        const afterDecimal = string.slice(isFloat.index+1)
        const fraction = fractions[afterDecimal]
        if (fraction && Number(beforeDecimal)) return beforeDecimal + " " + fraction
        else if (fraction) return fraction
        else return number
     } else return number
}