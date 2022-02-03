import { transformInputIntoIngredientData } from './transformInputIntoIngredientData'
import { scaleRecipe } from './scaleIngredient'

export function recipeReducer(state, action) {
  switch (action.type) {
    case 'setConstant':
      // When constant is set, it scales and sets ingredients
      return {
        input: state.input,
        ingredients: scaleRecipe(action.payload.constant, state.ingredients),
        constant: action.payload.constant
      }
    case 'setInput':
      // When input is set, it parses and sets ingredients
      return {
        input: action.payload.input,
        ingredients: transformInputIntoIngredientData(
          action.payload.input + ' '
        ),
        constant: 1
      }
    case 'setIngredient':
      console.log('THIS IS MY SET INGREDIENT PAYLOAD', action.payload)
      const ingredients = state.ingredients.map((ingredient) =>
        ingredient?.id === action.payload.id
          ? {
              ...ingredient,
              active: false,
              [action.payload.prop]: action.payload.value
            }
          : ingredient
      )
      return { input: state.input, constant: state.constant, ingredients }
    case 'setIngredientActive':
      // Active can be 'none' | 'amount' | 'name'
      const temp = state.ingredients.map((ingredient) =>
        ingredient?.id === action.payload.id
          ? {
              ...ingredient,
              active:
                state.active !== action.payload.prop
                  ? action.payload.prop
                  : 'none'
            }
          : ingredient
      )
      console.log('THIS IS MY SET INGREDIENTS ACTIVE', action.payload.prop)
      return { input: state.input, constant: state.constant, ingredients: temp }

    case 'deleteIngredient':
      const newIngredients = state.ingredients.filter(
        (ingredient) => ingredient?.id !== action.payload.id
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

/**
 * 1. Get ingredient name editing correctly
 * 2. Allow selection of either ingredient
 * 3. Deal with textarea
 * 4. Expand textbox
 */
