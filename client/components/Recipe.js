import React, { useEffect, useReducer, useRef } from 'react'

import { ACTIONS, sample } from '../config'
import { Ingredients } from './Ingredients'
import { RecipeControls } from './RecipeControls'
import { recipeReducer } from '../utils'

import styles from '../styles/modules/Recipe.module.css'

export function Recipe() {
  const inputRef = useRef(null) // Misnomer, this is a textarea
  // but it is called "input" in the JS data. See below.
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

  const handleSetExample = () =>
    dispatch({ type: ACTIONS.INPUT, payload: { input: sample } })

  const handlePaste = () => {}

  useEffect(() => {
    if (state.input === '') handleSetExample()
  }, [])

  useEffect(() => {
    if (inputRef?.current) inputRef.current.value = state.input
  }, [state.input])

  return (
    <div className={styles.recipe} id="slicer">
      <RecipeControls
        ref={inputRef}
        input={state.input}
        handlePaste={handlePaste}
        handleSetExample={handleSetExample}
      />
      <Ingredients
        ingredients={state.ingredients}
        handleActiveIngredient={handleActiveIngredient}
        handleChangeIngredient={handleChangeIngredient}
        handleDeleteIngredient={handleDeleteIngredient}
      />
    </div>
  )
}
