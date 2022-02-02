import React, { useEffect, useReducer } from 'react'
import { transformInputIntoIngredientData, sample, scaleRecipe } from '../utils'
import { Ingredients } from './Ingredients'
import { Textarea } from './elements'
import styles from '../styles/modules/Slicer.module.css'

function recipeReducer(state, action) {
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
      const ingredients = state.ingredients.map(
        (ingredient) =>
          console.log('MAPPED THIS INGREDINENT', ingredient, action.payload.id) // find ingredient with that id
      )
      return { input: state.input, constant: state.constant, ingredients }
    default:
      console.log('I AM RUNNING THE DEFAULT CASE IN REDUCER')
  }
}

export function Recipe() {
  const [state, dispatch] = useReducer(recipeReducer, {
    input: '',
    constant: 1,
    ingredients: []
  })

  useEffect(() => {
    if (!state.input?.length)
      dispatch({ type: 'setInput', payload: { input: sample } })
  }, [])

  return (
    <section className={styles.slicer_wrapper} id="slicer">
      <form>
        <div>
          <Textarea />
        </div>
        <div>
          <Ingredients ingredients={state.ingredients} />
        </div>
      </form>
    </section>
  )
}
