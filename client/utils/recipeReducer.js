import { Recipe, isNumber, toNumber, getAmountInUnit } from 'recipe-slicer'
import { ACTIONS } from '../config'

export function recipeReducer(state, action) {
  try {
    switch (action.type) {
      case ACTIONS.ROUND:
        return { ...state, rounded: !state.rounded }
      case ACTIONS.INPUT:
        const recipe = new Recipe()
        recipe.set(action.payload.input)
        return {
          recipe,
          error: null,
          rounded: state.rounded
        }
      case ACTIONS.INGREDIENT: // updates individual ingredient data
        const rollback = state
        try {
          let error = null
          let constant = state.recipe.constant
          const ingredient = state.recipe.ingredients.find(
            (i) => i.id === action.payload.id
          )
          if (action.payload.prop === 'amount') {
            if (isNumber(action.payload.value)) {
              // toNumber from /slicer handles fracition conversion
              const value = toNumber(action.payload.value)
              // if Ingredient is "locked" into the recipe,
              //    state.constant is updated based on the ratio
              if (ingredient.unit && ingredient.unit?.ml) {
                constant =
                  value / getAmountInUnit(ingredient.amount, ingredient.unit)
              } else {
                constant = value / ingredient.amount
              }
              if (ingredient.locked === true) {
                state.recipe.scale(constant)
              } else {
                ingredient.setNewUnlockedAmount(action.payload.value)
              }
            } else {
              error = 'Please enter a number'
            }
          } else if (action.payload.prop === 'ingredient') {
            ingredient.setNewName(action.payload.value, false)
          }
          return {
            recipe: state.recipe,
            rounded: state.rounded,
            error
          }
        } catch (error) {
          console.error(error)
          return { ...rollback, error: error?.message }
        } finally {
          // Close input unless ingredient is undefined
          if (ingredient) ingredient.setActive(ingredient.active)
        }
      case ACTIONS.ACTIVE:
        // Active can be 'none' | 'amount' | 'ingredient'
        state.recipe.ingredients.forEach((ingredient) => {
          if (ingredient.id === action.payload.id)
            ingredient.setActive(action.payload.prop)
        })
        return {
          recipe: state.recipe,
          rounded: state.rounded,
          error: state.error
        }
      case ACTIONS.LOCK:
        state.recipe.ingredients.forEach((ingredient) => {
          if (ingredient.id === action.payload.id) ingredient.toggleLocked()
          return ingredient
        })
        return {
          recipe: state.recipe,
          rounded: state.rounded,
          error: state.error
        }
      case ACTIONS.DELETE:
        state.recipe.ingredients = state.recipe.ingredients.filter(
          (ingredient) => ingredient.id !== action.payload.id
        )
        return {
          recipe: state.recipe,
          rounded: state.rounded,
          error: state.error
        }
      default:
        return {
          recipe: state.recipe,
          rounded: false,
          error: 'Error handling recipe :('
        }
    }
  } catch (error) {
    console.error('Error handling recipe input: ', error)
    return { recipe: state.recipe, rounded: false, error: error?.message }
  }
}
