import { Recipe } from '../slicer'
import { ACTIONS } from '../config'
import { isDigit } from './isDigit'

export function recipeReducer(state, action) {
  try {
    switch (action.type) {
      case ACTIONS.INPUT:
        const recipe = new Recipe()
        recipe.set(action.payload.input)
        return {
          recipe,
          error: null
        }
      case ACTIONS.INGREDIENT: // updates individual ingredient data
        let error = null
        let constant = state.recipe.constant
        if (action.payload.value.length > 100) {
          error = 'Maximum length exceeded'
          return { recipe: state.recipe, error }
        }
        state.recipe.ingredients.forEach((ingredient) => {
          try {
            if (ingredient.id === action.payload.id) {
              if (action.payload.prop === 'amount') {
                if (isDigit(action.payload.value)) {
                  // if Ingredient is "locked" into the recipe,
                  //    state.constant is updated based on the ratio
                  if (ingredient.locked === true) {
                    constant =
                      action.payload.value / Number(ingredient.displayAmount())
                    state.recipe.scale(constant)
                  } else {
                    ingredient.setNewAmount(action.payload.value)
                  }
                } else {
                  error = 'Please enter a number'
                }
              } else if (action.payload.prop === 'ingredient') {
                ingredient.setName(action.payload.value, false)
              }
            }
          } catch (error) {
            console.error('Error updating ingredient', error)
            error = 'Could not update ingredient'
          } finally {
            ingredient.setActive(ingredient.active)
          }
        })

        return {
          recipe: state.recipe,
          error
        }
      case ACTIONS.ACTIVE:
        // Active can be 'none' | 'amount' | 'ingredient'
        state.recipe.ingredients.forEach((ingredient) => {
          if (ingredient.id === action.payload.id)
            ingredient.setActive(action.payload.prop)
        })
        return {
          recipe: state.recipe,
          error: state.error
        }
      case ACTIONS.LOCK:
        state.recipe.ingredients.forEach((ingredient) => {
          if (ingredient.id === action.payload.id) ingredient.toggleLocked()
          return ingredient
        })
        return {
          recipe: state.recipe,
          error: state.error
        }
      case ACTIONS.DELETE:
        state.recipe.ingredients = state.recipe.ingredients.filter(
          (ingredient) => ingredient.id !== action.payload.id
        )
        return {
          recipe: state.recipe,
          error: state.error
        }
      default:
        return { recipe: state.recipe, error: 'Error handling recipe :(' }
    }
  } catch (error) {
    console.error('Error handling recipe input: ', error)
    return { recipe: state.recipe, error: error?.message }
  }
}
