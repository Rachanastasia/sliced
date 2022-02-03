import React, { useEffect, useReducer } from 'react'

import { transformInputIntoIngredientData, sample, scaleRecipe } from '../utils'
import { Ingredients } from './Ingredients'
import { Textarea } from './elements'
import { recipeReducer } from '../utils'

import styles from '../styles/modules/Recipe.module.css'

export function Recipe() {
  const [state, dispatch] = useReducer(recipeReducer, {
    input: '',
    constant: 1,
    ingredients: []
  })

  const handleActiveIngredient = (id) =>
    dispatch({ type: 'setIngredientActive', payload: { id } })

  const handleChangeIngredientAmount = (id, amount) =>
    dispatch({
      type: 'setIngredient',
      payload: { id, prop: 'amount', value: amount }
    })

  const handleChangeIngredientName = (id, name) =>
    dispatch({
      type: 'setIngredient',
      payload: { id, prop: 'name', value: name }
    })

  const handleDeleteIngredient = (id) =>
    dispatch({ type: 'deleteIngredient', payload: { id } })

  useEffect(() => {
    if (state.input === '')
      dispatch({ type: 'setInput', payload: { input: sample } })
  }, [])

  return (
    <div className={styles.recipe} id="slicer">
      <Textarea input={state.input} />
      <Ingredients
        ingredients={state.ingredients}
        handleActiveIngredient={handleActiveIngredient}
        handleChangeIngredientAmount={handleChangeIngredientAmount}
        handleChangeIngredientName={handleChangeIngredientName}
        handleDeleteIngredient={handleDeleteIngredient}
      />
    </div>
  )
}
