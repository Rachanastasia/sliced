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
      // triggered when active

      // set new value
      // set active to false
      // set new constant based on amount of ingredient
      // do calculations first
      const ingredients = state.ingredients.map((ingredient) =>
        ingredient?.id === action.payload.id
          ? { ...ingredient, active: false, amount: action.payload.amount }
          : ingredient
      )
      return { input: state.input, constant: state.constant, ingredients }
    case 'setIngredientActive':
      // find ingredient
      // set active to true
      //
      console.log('BEGINNING SET ACTINVE')
      const temp = state.ingredients.map((ingredient) =>
        ingredient?.id === action.payload.id
          ? { ...ingredient, active: !ingredient.active }
          : ingredient
      )
      return { input: state.input, constant: state.constant, ingredients: temp }

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

  const handleActiveIngredient = (id) =>
    dispatch({ type: 'setIngredientActive', payload: { id } })

  const handleChangeIngredient = (id, amount) =>
    dispatch({ type: 'setIngredient', payload: { id, amount } })

  useEffect(() => {
    if (!state.input?.length)
      dispatch({ type: 'setInput', payload: { input: sample } })
  }, [])

  return (
    <form className={styles.slicer_wrapper} id="slicer">
      <Textarea />
      <Ingredients
        ingredients={state.ingredients}
        handleActiveIngredient={handleActiveIngredient}
        handleChangeIngredient={handleChangeIngredient}
      />
    </form>
  )
}
