import {DECIMALS_TO_FRACTIONS} from '../config/constants'

export function convertFloatToFraction(number){
   console.log('THIS IS INPUT TO DISPLAY AS FRACTION', number)
     const regex = /\./g
     const string = `${number}`
     const isFloat = regex.exec(string)
     if (isFloat){
        const beforeDecimal = string.slice(0, isFloat.index)
        const afterDecimal = string.slice(isFloat.index+1)
        const fraction = DECIMALS_TO_FRACTIONS[afterDecimal]
        if (fraction && Number(beforeDecimal)) return beforeDecimal + " " + fraction
        else if (fraction) return fraction
        else return number
     } else return number
}