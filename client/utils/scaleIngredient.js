import {UNIT_DATA} from '../config/constants'

const {TEASPOON, TABLESPOON, CUP, QUART, PINT, GALLON} = UNIT_DATA


export function scaleIngredient({amount, unit}, constant=1) {
    if (!amount || constant === 1) return {amount, unit}
    else if (!unit || !unit?.isScalable) return {unit, amount: amount?.value * constant}
    else {
        const scaledAmountInMl = unit.ml * amount.value * constant
        const scaleUnitandAmount = constant > 1 ? scaleUpUnitAndAmount : scaleDownUnitAndAmount
        const scaledData = scaleUnitandAmount(scaledAmountInMl)
        return scaledData ? {amount: scaledData.amount, unit: scaledData.unit} : {amount, unit}
    }
}

const makeIngredientObject = (amount, unit) => ({amount: getAmountForCurrentUnit(amount, unit.ml), unit})

function scaleUpUnitAndAmount(amountInMl){
    switch(true){
        case (amountInMl < TABLESPOON): return makeIngredientObject(amountInMl, TEASPOON)
        case (amountInMl >= TABLESPOON): return makeIngredientObject(amountInMl, TABLESPOON);
        case (amountInMl >= TABLESPOON * 4): return makeIngredientObject(amountInMl, CUP);
        case (amountInMl >= QUART): return makeIngredientObject(amountInMl, QUART);
        case (amountInMl > GALLON): return makeIngredientObject(amountInMl, GALLON);
        default: return {amount: getAmountForCurrentUnit(amountInMl, 1), unit: {ml: 1, name: null}}
    }
}


function scaleDownUnitAndAmount(amountInMl){
    switch(true){
        case (amountInMl >= GALLON.ml/2): return makeIngredientObject(amountInMl, GALLON);
        case (amountInMl >= QUART.ml): return makeIngredientObject(amountInMl, QUART);
        case (amountInMl >= PINT.ml): return makeIngredientObject(amountInMl, PINT);
        case (amountInMl >= CUP.ml/4): return makeIngredientObject(amountInMl, CUP);
        case (amountInMl >= TABLESPOON.ml): return makeIngredientObject(amountInMl, TABLESPOON);
        case (amountInMl <= TEASPOON.ml): return makeIngredientObject(amountInMl, TEASPOON);
        default: return {amount: getAmountForCurrentUnit(amountInMl, 1), unit: {ml: 1, name: null}}
    }
}

function getAmountForCurrentUnit (amountInMl, mlPerUnit){
    const value = Number((amountInMl / mlPerUnit))
    console.log('TO BE RETURNED FROM TURNING BACK INTO CONVENTIONAL', {value, amountInMl, mlPerUnit})
    return {value, ml: amountInMl}
}
