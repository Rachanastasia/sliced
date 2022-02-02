import { UNIT_DATA } from '../config/constants'

const { TEASPOON, TABLESPOON, CUP, QUART, PINT, GALLON } = UNIT_DATA

export function scaleRecipe(ingredients, constant) {
  // THIS DOES NOTHING FOR TESTING
  // THIS SHOULD COME FROM SLICER PACKAGE
  return ingredients
}

export function scaleIngredient({ amount, unit }, constant = 1) {
  if (!amount || constant === 1) return { amount, unit }
  else if (!unit || !unit?.isScalable) {
    const newAmount = amount * constant
    const newAmountFormatted = Number(newAmount.toFixed(2))
    return { unit, amount: `${newAmountFormatted}` }
  } else {
    const scaledAmountInMl = unit.ml * amount * constant
    const scaleUnitandAmount =
      constant > 1 ? scaleUpUnitAndAmount : scaleDownUnitAndAmount
    const scaledData = scaleUnitandAmount(scaledAmountInMl)
    return scaledData
      ? { amount: scaledData.amount, unit: scaledData.unit }
      : { amount, unit }
  }
}

const makeIngredientObject = (amount, unit) => {
  const newAmount = getAmountForCurrentUnit(amount, unit.ml)
  return { amount: newAmount, unit }
}

function scaleUpUnitAndAmount(amountInMl) {
  const units = {
    gallon: amountInMl > GALLON.ml / 2,
    cup: amountInMl > CUP.ml / 4,
    tablespoon: amountInMl < TABLESPOON.ml * 3
  }
  switch (true) {
    case units.gallon:
      return makeIngredientObject(amountInMl, GALLON)
    case units.cup:
      return makeIngredientObject(amountInMl, CUP)
    case units.tablespoon:
      return makeIngredientObject(amountInMl, TABLESPOON)
    default:
      return makeIngredientObject(amountInMl, TEASPOON)
  }
}

function scaleDownUnitAndAmount(amountInMl) {
  const units = {
    quart: amountInMl < QUART.ml * 1.9,
    pint: amountInMl < PINT.ml * 1.9,
    cup: amountInMl < CUP.ml * 1.9,
    tablespoon: amountInMl < TABLESPOON.ml * 3.9,
    teaspoon: amountInMl < TEASPOON.ml * 2.9
  }
  switch (true) {
    case units.teaspoon:
      return makeIngredientObject(amountInMl, TEASPOON)
    case units.tablespoon:
      return makeIngredientObject(amountInMl, TABLESPOON)
    case units.cup:
      return makeIngredientObject(amountInMl, CUP)
    case units.pint:
      return makeIngredientObject(amountInMl, PINT)
    case units.quart:
      return makeIngredientObject(amountInMl, QUART)
    default:
      return makeIngredientObject(amountInMl, GALLON)
  }
}

function getAmountForCurrentUnit(amountInMl, mlPerUnit) {
  const value = amountInMl / mlPerUnit
  const roundedValue = Number(value.toFixed(2))
  return roundedValue.toString()
}
