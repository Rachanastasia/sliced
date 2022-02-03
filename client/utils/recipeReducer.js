import { ACTIONS } from '../config'
import { parse } from '../slicer'
import { scaleRecipe } from './scaleIngredient'

export function recipeReducer(state, action) {
  switch (action.type) {
    case ACTIONS.CONSTANT:
      // When constant is set, it scales and sets ingredients
      return {
        input: state.input,
        ingredients: scaleRecipe(action.payload.constant, state.ingredients),
        constant: action.payload.constant
      }
    case ACTIONS.INPUT:
      // Parses and sets state.ingredients: Ingredient[]
      return {
        input: action.payload.input,
        ingredients: parse(action.payload.input + ' '),
        constant: 1
      }
    case ACTIONS.INGREDIENT:
      const ingredients = state.ingredients.map((ingredient) => {
        if (ingredient.id === action.payload.id) {
          // sets to "none"
          ingredient.setActive(ingredient.active)
          if (action.payload.prop === 'amount') {
            ingredient.setAmount(action.payload.value)
          } else if (action.payload.prop === 'amount') {
            ingredient.setIngredientName(action.payload.value)
          }
        }
        return ingredient
      })
      return { input: state.input, constant: state.constant, ingredients }
    case ACTIONS.ACTIVE:
      // Active can be 'none' | 'amount' | 'ingredient'
      const temp = state.ingredients.map((ingredient) => {
        if (ingredient.id === action.payload.id)
          ingredient.setActive(action.payload.prop)
        return ingredient
      })
      return { input: state.input, constant: state.constant, ingredients: temp }
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
      console.log('I AM RUNNING THE DEFAULT CASE IN REDUCER')
  }
}
