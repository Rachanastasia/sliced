import {UNIT_DATA} from '../config/constants'

const {TEASPOON, TABLESPOON, CUP, QUART, PINT, GALLON, OUNCE, GRAM, POUND} = UNIT_DATA


export function scaleIngredient({amount, unit}, constant=1) {
    if (!amount) return {amount: null, unit: null}
    if (!unit || !unit?.isScalable) return {unit, amount: amount?.value * constant}
    else {
        const scaledAmountInMl = (unit.ml * amount.value) * constant
        console.log('SCALED AMOUNT IN ML::', scaledAmountInMl)
        const newData = getUnitAndAmountFromMlAmount(scaledAmountInMl)
        console.log('THIS IS DATA FROM GETUNITANDAMOUNTFROMML:', newData)
        return newData ? {amount: newData?.amount, unit: newData?.unit} : {amount, unit}
    }
}



function getUnitAndAmountFromMlAmount(amountInMl){
    const makeIngredientObject = (amount, unit) => ({amount: getAmountForCurrentUnit(amount, unit.ml), unit})
    //is it more than the last number?
    //is it less than the previous number 
    //have descending fuction and ascending function
    switch(true){
        case (amountInMl >= GALLON.ml/2): return makeIngredientObject(amountInMl, GALLON);
        case (amountInMl >= QUART.ml): return makeIngredientObject(amountInMl, QUART);
        case (amountInMl >= PINT.ml): return makeIngredientObject(amountInMl, PINT);
        case (amountInMl >= CUP.ml/4): return makeIngredientObject(amountInMl, CUP);
        case (amountInMl >= TABLESPOON.ml): return makeIngredientObject(amountInMl, TABLESPOON);
        case (amountInMl <= TEASPOON.ml): return makeIngredientObject(amountInMl, TEASPOON);
        default: console.log('RETURNED INVALID ML AMOUNT')
    }
}

function getAmountForCurrentUnit (amountInMl, mlPerUnit){
    const value = Number((amountInMl / mlPerUnit))
    console.log('TO BE RETURNED FROM TURNING BACK INTO CONVENTIONAL', {value, amountInMl, mlPerUnit})
    return {value, ml: amountInMl}
}
