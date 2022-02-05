import { ACTIONS } from '../config'
import { isDigit } from './isDigit'

export function recipeReducer(state, action) {
  try {
    switch (action.type) {
      case ACTIONS.INPUT:
        // Parses and sets state.recipe to Slicer Recipe class
        state.recipe.setInput(action.payload.input + ' ')
        return {
          recipe: state.recipe,
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
          // Updates given ingredient
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
        })

        if (constant !== state.recipe.constant) {
          console.log('BEFORE RECIPE CHANGES', state.recipe)

          state.recipe.setConstant(constant)
          console.log('AFTER RECIPE CHANGES', state.recipe)
        }
        // If constant is unchanged, the algo should return the same ingredients without processing

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
        const lock = state.recipe.ingredients.map((ingredient) => {
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
        const newIngredients = state.recipe.ingredients.filter(
          (ingredient) => ingredient.id !== action.payload.id
        )
        return {
          input: state.input,
          constant: state.constant,
          ingredients: newIngredients,
          error: state.error
        }
      // case ACTIONS.REPLACE:
      //   const replace = action.payload.state
      //   const classIngredients = replace.ingredients.map((ingredient) => {
      //     // make ingredients as Ingredient class

      //     return ingredient
      //   })
      default:
        return { recipe: state.recipe, error: 'Error handling recipe :(' }
    }
  } catch (error) {
    console.error('Error handling recipe input: ', error?.message ?? error)
    return { recipe: state.recipe, error: 'Error handling recipe :(' }
  }
}
