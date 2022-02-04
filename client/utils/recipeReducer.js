import { ACTIONS } from '../config'
import { parse } from '../slicer/types/parse'
import { isDigit } from './isDigit'

function scaleRecipe(constant, _ingredients) {
  console.log('PRETENDING TO SCALE INGREDIENT WITH THIS CONSTANT: ', constant)
}

export function recipeReducer(state, action) {
  try {
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
        const ingredientArr = parse(action.payload.input + ' ')
        if (ingredientArr === state.ingredients) {
          return state
        }
        return {
          input: action.payload.input.trim(),
          ingredients: ingredientArr,
          constant: 1,
          error: null
        }

      case ACTIONS.INGREDIENT:
        let error = null
        if (action.payload.value.length > 100) {
          error = 'Maximum length exceeded'
          return { ...state, error }
        }
        const ingredients = state.ingredients.map((ingredient) => {
          if (ingredient.id === action.payload.id) {
            if (action.payload.prop === 'amount') {
              if (action.payload.value.length > 5) {
                error = 'Maximum length 5 digits'
              } else if (isDigit(action.payload.value))
                ingredient.setAmount(action.payload.value, true)
              else {
                error = 'Please enter a number'
              }
            } else if (action.payload.prop === 'ingredient') {
              ingredient.setIngredientName(action.payload.value, true)
            }
          }
          // sets to "none"
          ingredient.setActive(ingredient.active)
          return ingredient
        })
        return {
          input: state.input,
          constant: state.constant,
          ingredients,
          error
        }

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
          ingredients: active,
          error: state.error
        }

      case ACTIONS.DELETE:
        const newIngredients = state.ingredients.filter(
          (ingredient) => ingredient.id !== action.payload.id
        )
        return {
          input: state.input,
          constant: state.constant,
          ingredients: newIngredients,
          error: state.error
        }
      default:
        return { ...state, error: 'Error handling recipe :(' }
    }
  } catch (error) {
    console.error('Error handling recipe input: ', error?.message ?? error)
    return { ...state, error: 'Error handling recipe :(' }
  }
}
