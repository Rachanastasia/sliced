import {getUnitAndAmountFromMlAmount} from '../utils/units.js'

export function scaleIngredient({amount, unit}, constant=1) {
    if (!amount) return {amount: null, unit: null}
    if (!unit || !unit?.isScalable) return {unit, amount: amount?.value * constant}
    else {
        console.log('RAN ELSE STATEMENT AND DID NOT REUTRN EARLY', {amount, unit, constant})
        const scaledAmountInMl = amount.value * unit.ml
        console.log('THIS IS INPUT FROM COMPONENT TO SCALE', scaledAmountInMl)
        const newData = getUnitAndAmountFromMlAmount(scaledAmountInMl)
        console.log('THIS IS NEW DATA', newData)
        return newData ? {amount: newData?.amount, unit: newData?.unit} : {amount, unit}
    }
}
