import {UNIT_DATA} from '../config/constants'

//takes in amount in ml and returns amount with unit 
const GRAM = null
const POUND = null
const PINCH = null //unscalable units that scale with the constant only


const {TEASPOON, TABLESPOON, CUP, QUART, PINT, GALLON, OUNCE} = UNIT_DATA
export const UNITS = {
    "cups": CUP,
    "cup": CUP,
    "c": CUP,
    "cs": CUP,
    "c.": CUP,
    "cs.": CUP,
    "tablespoons": TABLESPOON,
    "tablespoon": TABLESPOON,
    "tbsp": TABLESPOON,
    "tbsps": TABLESPOON,
    "tbsp.": TABLESPOON,
    "tbsps.": TABLESPOON,
    "teaspoons": TEASPOON,
    "teaspoon": TEASPOON,
    "tsps": TEASPOON,
    "tsp": TEASPOON,
    "tsps.": TEASPOON,
    "tsp.": TEASPOON,
    "oz": OUNCE,
    "ounce": OUNCE,
    "ounces": OUNCE,
    "ozs": OUNCE,
    "oz.": OUNCE,
    "ozs.": OUNCE,
    "pounds": POUND,
    "lb": POUND,
    "lbs": POUND,
    "lb.": POUND,
    "gallons": GALLON,
    "gallon": GALLON,
    "pint": PINT,
    "pints": PINT,
    "quart": QUART,
    "quarts": QUART,
    "q": QUART, 
    "grams": GRAM,
    "gram": GRAM,
    "g": GRAM,
  }

export function getUnitFromString(parsedUnit){
    return UNITS[parsedUnit]
}

function getAmountForCurrentUnit (amountInMl, mlPerUnit){
    const number = amountInMl / mlPerUnit
    const fraction = null //get fraction from amount
    return {number, fraction}
}


export function getUnitAndAmountFromMlAmount(amountInMl){
    const makeIngredientObject = (amount, unit) => ({amount: getAmountForCurrentUnit(amount, unit.ml), unit})
    switch(amountInMl){
        case (amountInMl > GALLON.ml): return makeIngredientObject(amountInMl, GALLON);
        case (amountInMl > QUART.ml): return makeIngredientObject(amountInMl, QUART);
        case (amountInMl > PINT.ml): return makeIngredientObject(amountInMl, PINT);
        case (amountInMl > CUP.ml): return makeIngredientObject(amountInMl, CUP);
        case (amountInMl > OUNCE.ml): return makeIngredientObject(amountInMl, OUNCE);
        case (amountInMl > TABLESPOON.ml): return makeIngredientObject(amountInMl, TABLESPOON);
        case (amountInMl <= TEASPOON.ml): return makeIngredientObject(amountInMl, TEASPOON);
        default: console.log('Invalid ml amount')
    }
}