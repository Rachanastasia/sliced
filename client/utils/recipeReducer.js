import { ACTIONS } from '../config'
import { parse } from '../slicer/types/parse'
import { isDigit } from './isDigit'

function scaleRecipe(constant, _ingredients) {
  console.log('PRETENDING TO SCALE INGREDIENT WITH THIS CONSTANT: ', constant)
}

export function recipeReducer(state, action) {
  switch (action.type) {
    // case ACTIONS.CONSTANT:
    //   // When constant is set, it scales and sets ingredients
    //   return {
    //     input: state.input,
    //     ingredients: scaleRecipe(action.payload.constant, state.ingredients),
    //     constant: action.payload.constant
    //   }
    case ACTIONS.INPUT:
      // Parses and sets state.ingredients: Ingredient[]
      if (action.payload.input === state.input) return state
      return {
        input: action.payload.input,
        ingredients: parse(action.payload.input + ' '),
        constant: 1
      }

    case ACTIONS.INGREDIENT:
      const ingredients = state.ingredients.map((ingredient) => {
        if (ingredient.id === action.payload.id) {
          if (action.payload.prop === 'amount') {
            if (isDigit) ingredient.setAmount(action.payload.value, true)
            else
              console.log(
                `I should be setting the error in the UI: '${action.payload.value} is not a valid amount.' `
              )
          } else if (action.payload.prop === 'ingredient') {
            ingredient.setIngredientName(action.payload.value, true)
          }
          // sets to "none"
          ingredient.setActive(ingredient.active)
        }
        return ingredient
      })
      return { input: state.input, constant: state.constant, ingredients }

    case ACTIONS.ACTIVE:
      // Active can be 'none' | 'amount' | 'ingredient'
      const active = state.ingredients.map((ingredient) => {
        if (ingredient.id === action.payload.id)
          ingredient.setActive(action.payload.prop)
        return ingredient
      })
      return {
        input: state.input,
        constant: state.constant,
        ingredients: active
      }

    case ACTIONS.DELETE:
      const newIngredients = state.ingredients.filter(
        (ingredient) => ingredient.id !== action.payload.id
      )
      return {
        input: state.input,
        constant: state.constant,
        ingredients: newIngredients
      }

    default:
      console.log('I should be setting the error in UI: Error updating recipe')
  }
}
