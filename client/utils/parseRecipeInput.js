import {UNITS} from './units'


export function transformInputIntoIngredientData(input){
  const EMPTY_INGREDIENT = {
    amount: null,
    unit: null,
    ingredient: null
  }
  let dataIngredients = []
  let currentWord = ''
  let temporaryParsedIngredient = EMPTY_INGREDIENT

  const regex = /\d/
  const currentWordIsDigit = ()=>currentWord.match(regex)
  const currentWordIsUnit = ()=>!!UNITS[currentWord] 


  for (let i = 0; i <= input.length; i++) {
    const currentChar = input[i]?.toLowerCase()
    if (currentChar === ' ' || currentChar === '\n') {
      validateIngredientAndAddToDataIngredients()
      sortCurrentWord()
      currentWord = ''
    } else {
      currentWord = currentWord + currentChar
    }
  }


  function validateIngredientAndAddToDataIngredients(){
    const {ingredient, amount, unit} = temporaryParsedIngredient
    const hasIngredientAmountAndUnit = ingredient && amount && unit
    const hasIngredientAndAmount = ingredient && amount 
    const nextWordIsDigit = currentWordIsDigit()

    if ((hasIngredientAmountAndUnit || hasIngredientAndAmount) && nextWordIsDigit) {
        const dataIngredient = transformParsedIngredientIntoDataIngredient({ingredient, amount, unit})
        addDataIngredientToList(dataIngredient)
        setTemporaryParsedIngredient(EMPTY_INGREDIENT)
    }
  }

  function transformParsedIngredientIntoDataIngredient({ingredient, amount, unit}){
    const unitData = unit ? UNITS[unit] : {ml: 1, name: null}
    const amountFloat = Number(transformParsedAmountToFloat(amount).toFixed(2))
    const amountInMl = amountFloat * unitData.ml
    return {
      unit: unitData,
      ingredient,
      amount: { ml: amountInMl, value: amountFloat}
    }
  }

  function transformParsedAmountToFloat(amount){
    const number = Number(amount)
    return !!number ? number : parseStringWithFraction(amount)
  }

  function parseStringWithFraction(amount){
    const regex = /\//ig
    const indexOfSlash = regex.exec(amount)
    let decimal;
    if (indexOfSlash?.index) {
      const denominator = Number(amount[indexOfSlash.index + 1])
      const numerator = Number(amount[indexOfSlash.index - 1])
      const restOfNumber = amount.slice(0, indexOfSlash.index - 2)
      const wholeNumber = Number(restOfNumber)
      if (numerator && denominator){
        const fraction = numerator / denominator
        decimal = Number(fraction.toFixed(2))
        return decimal && wholeNumber ? wholeNumber + decimal : decimal
      } 
    }
  }

  function addDataIngredientToList(data){
    dataIngredients.push(data)
  }

  function sortCurrentWord(){
    const isDigit = currentWordIsDigit()
    const isUnit = currentWordIsUnit()
    if (isDigit){
      addCurrentWordToAmount(currentWord)
    } else if (isUnit) {
      addCurrentWordToUnit(currentWord)
    } else {
      addCurrentWordToIngredient(currentWord)
    }
  }

  function addCurrentWordToAmount(currentWord){
    const newAmount = temporaryParsedIngredient.amount ? temporaryParsedIngredient.amount + ' ' + currentWord : currentWord
    setTemporaryParsedIngredient({...temporaryParsedIngredient, amount: newAmount})
  }

  function addCurrentWordToUnit(currentWord){
    setTemporaryParsedIngredient({...temporaryParsedIngredient, unit: currentWord})
  }

  function addCurrentWordToIngredient(currentWord){
    const newIngredient = temporaryParsedIngredient.ingredient ? temporaryParsedIngredient.ingredient + ' ' + currentWord : currentWord
    setTemporaryParsedIngredient({...temporaryParsedIngredient, ingredient: newIngredient})
  }

  function setTemporaryParsedIngredient(ingredient){
    temporaryParsedIngredient = ingredient
  }

  return dataIngredients
}
