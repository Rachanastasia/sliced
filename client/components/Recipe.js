import React, { useEffect, useReducer } from 'react'

import { ACTIONS } from '../config'
import { sample } from '../utils'
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

  const handleActiveIngredient = ({ id, prop }) =>
    dispatch({ type: ACTIONS.ACTIVE, payload: { id, prop } })

  const handleChangeIngredient = ({ id, prop, value }) =>
    dispatch({
      type: ACTIONS.INGREDIENT,
      payload: { id, prop, value }
    })

  const handleDeleteIngredient = ({ id }) =>
    dispatch({ type: ACTIONS.DELETE, payload: { id } })

  useEffect(() => {
    if (state.input === '')
      dispatch({ type: ACTIONS.INPUT, payload: { input: sample } })
  }, [])

  return (
    <div className={styles.recipe} id="slicer">
      <span className={styles.caption}>
        Copy and paste your favorite recipe below.
      </span>
      <Textarea input={state.input} />
      <Ingredients
        ingredients={state.ingredients}
        handleActiveIngredient={handleActiveIngredient}
        handleChangeIngredient={handleChangeIngredient}
        handleDeleteIngredient={handleDeleteIngredient}
      />
    </div>
  )
}
