import React, { useEffect, useReducer, useRef } from 'react'
import { Recipe as SlicerRecipe } from 'recipe-slicer'
import { ACTIONS, sample } from '../config'
import { Ingredients } from './Ingredients'
import { RecipeControls } from './RecipeControls'
import { recipeReducer } from '../utils'

import styles from '../styles/modules/Recipe.module.css'

export function Recipe() {
  const inputRef = useRef(null) // Misnomer, this is a textarea,
  // but it is called "recipe.input" in the JS data. See below.
  const [state, dispatch] = useReducer(recipeReducer, {
    recipe: new SlicerRecipe(),
    error: null,
    rounded: true
  })

  useEffect(() => {
    // Sets example recipe by default
    if (!state.recipe?.input) handleSetExample()
  }, [state.recipe?.input])

  useEffect(() => {
    if (inputRef?.current && inputRef.current.value !== state.recipe.input)
      inputRef.current.value = state.recipe.input
  }, [state.recipe])

  const handleToggleRounding = () => {
    dispatch({ type: ACTIONS.ROUND })
  }

  // Toggles active/not state for ingredient
  const handleActiveIngredient = ({ id, prop }) =>
    dispatch({ type: ACTIONS.ACTIVE, payload: { id, prop } })

  // Toggles locked/unlocked state for ingredient
  const handleLockedIngredient = ({ id }) =>
    dispatch({ type: ACTIONS.LOCK, payload: { id } })

  const handleChangeIngredient = ({ id, prop, value }) =>
    dispatch({
      type: ACTIONS.INGREDIENT,
      payload: { id, prop, value }
    })

  const handleDeleteIngredient = ({ id }) => {
    dispatch({ type: ACTIONS.DELETE, payload: { id } })
  }

  const handleSetExample = () =>
    dispatch({ type: ACTIONS.INPUT, payload: { input: sample } })

  const handleStateInput = () => {
    dispatch({
      type: ACTIONS.INPUT,
      payload: { input: inputRef.current.value }
    })
  }
  const handlePaste = async () => {
    const clipboard = await navigator.clipboard.readText()
    dispatch({ type: ACTIONS.INPUT, payload: { input: clipboard } })
  }

  return (
    <div className={styles.recipe} id="slicer">
      <RecipeControls
        ref={inputRef}
        isRounded={state.rounded}
        input={state.recipe.input}
        handlePaste={handlePaste}
        handleSetExample={handleSetExample}
        handleStateInput={handleStateInput}
        handleToggleRounding={handleToggleRounding}
        error={state.error}
      />
      <Ingredients
        ingredients={state.recipe?.ingredients}
        showFractions={state.rounded}
        handleActiveIngredient={handleActiveIngredient}
        handleChangeIngredient={handleChangeIngredient}
        handleDeleteIngredient={handleDeleteIngredient}
        handleLockedIngredient={handleLockedIngredient}
      />
    </div>
  )
}
