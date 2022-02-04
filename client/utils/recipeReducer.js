import { ACTIONS } from '../config'
import { parse } from '../slicer/types/parse'
import { isDigit } from './isDigit'

function scaleRecipe(constant, ingredients) {
  console.log('PRETENDING TO SCALE INGREDIENT WITH THIS CONSTANT: ', constant)
  return ingredients
}

export function recipeReducer(state, action) {
  try {
    switch (action.type) {
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

      case ACTIONS.INGREDIENT: // updates individual ingredient data
        let error = null
        let constant = state.constant
        if (action.payload.value.length > 100) {
          error = 'Maximum length exceeded'
          return { ...state, error }
        }
        const ingredients = state.ingredients.map((ingredient) => {
          if (ingredient.id === action.payload.id) {
            if (action.payload.prop === 'amount') {
              if (action.payload.value.length > 5) {
                error = 'Maximum length 5 digits'
              } else if (isDigit(action.payload.value)) {
                // if Ingredient is "locked" into the recipe,
                //    state.constant is updated based on the ratio
                if (ingredient.locked === true) {
                  constant = action.payload.value / ingredient.amount.amount
                }
                // Must get constant ratio before setting new amount
                ingredient.setAmount(action.payload.value, true)
              } else {
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
        // If constant is unchanged, the algo should return the same ingredients without processing
        return {
          input: state.input,
          constant,
          ingredients: scaleRecipe(constant, ingredients),
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
      case ACTIONS.LOCK:
        const lock = state.ingredients.map((ingredient) => {
          if (ingredient.id === action.payload.id) ingredient.toggleLocked()
          return ingredient
        })
        return {
          input: state.input,
          constant: state.constant,
          ingredients: lock,
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
