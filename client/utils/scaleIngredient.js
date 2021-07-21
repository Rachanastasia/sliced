import {UNIT_DATA} from '../config/constants'

const {TEASPOON, TABLESPOON, CUP, QUART, PINT, GALLON} = UNIT_DATA


export function scaleIngredient({amount, unit}, constant=1) {
    if (!amount || constant === 1) return {amount, unit}
    else if (!unit || !unit?.isScalable) {
        const newAmount = (amount * constant)
        const newAmountFormatted = Number(newAmount.toFixed(2))
        return {unit, amount: `${newAmountFormatted}`}
    } else {
        const scaledAmountInMl = unit.ml * amount * constant
        const scaleUnitandAmount = constant > 1 ? scaleUpUnitAndAmount : scaleDownUnitAndAmount
        const scaledData = scaleUnitandAmount(scaledAmountInMl)
        return scaledData ? {amount: scaledData.amount, unit: scaledData.unit} : {amount, unit}
    }
}

const makeIngredientObject = (amount, unit) => {
    console.log('THIS IS THE MAKE INGREDIENT FUNCTION')
    console.log('MAKE INGREDIENT CALLS DIVIDING FUNC WITH THESE INGREDIENTS', {amount, unit})
    const newAmount = getAmountForCurrentUnit(amount, unit.ml)
    console.log('AND THIS IS THE NEW AMOUNT', newAmount)
    return ({amount: newAmount, unit})}

function scaleUpUnitAndAmount(amountInMl){
    switch(true){
        case (amountInMl < TABLESPOON.ml): return makeIngredientObject(amountInMl, TEASPOON)
        case (amountInMl >= TABLESPOON.ml): return makeIngredientObject(amountInMl, TABLESPOON);
        case (amountInMl >= TABLESPOON.ml * 4): return makeIngredientObject(amountInMl, CUP);
        case (amountInMl >= QUART.ml): return makeIngredientObject(amountInMl, QUART);
        case (amountInMl > GALLON.ml): return makeIngredientObject(amountInMl, GALLON);
        default: console.error('THIS IS A PROBLEM SHOULD NOT BE HAPPENING!!', {amountInMl})
    }
}


function scaleDownUnitAndAmount(amountInMl){
    const units = {
        gallon: amountInMl >= GALLON.ml/2,
        quart: amountInMl <= QUART.ml,
        pint: amountInMl <= PINT.ml,
        cup: amountInMl <= CUP.ml,
        tablespoon: amountInMl <= TABLESPOON.ml * 4,
        teaspoon: amountInMl <= TEASPOON.ml * 3
    }
    const {gallon, quart, pint, cup, tablespoon, teaspoon} = units
    console.log('FROM SCALE DOWN FUNCTION::::',{amountInMl, gallon, quart, pint, cup, tablespoon, teaspoon} )
    switch(true){
        case (units.teaspoon): return makeIngredientObject(amountInMl, TEASPOON);
        case (units.tablespoon): return makeIngredientObject(amountInMl, TABLESPOON);
        case (units.cup): return makeIngredientObject(amountInMl, CUP);
        case (units.pint): return makeIngredientObject(amountInMl, PINT);
        case (units.quart): return makeIngredientObject(amountInMl, QUART);
        default: return makeIngredientObject(amountInMl, GALLON);
    }
}

function getAmountForCurrentUnit (amountInMl, mlPerUnit){
    const value = amountInMl / mlPerUnit
    const roundedValue = Number(value.toFixed(2))
    return roundedValue.toString()
}
