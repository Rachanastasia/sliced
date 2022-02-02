import React, { useState, useEffect } from 'react'
import { transformInputIntoIngredientData, sample } from '../utils'
import { Ingredients } from './Ingredients'
import { Textarea } from './elements'
import styles from '../styles/modules/Slicer.module.css'

export function Recipe() {
  const [ingredients, setIngredients] = useState({
    input: [],
    ingredientData: []
  })
  const setIngredientInput = (input) => {
    const formattedInput = input + ' '
    const ingredientData = transformInputIntoIngredientData(formattedInput)
    console.log('THIS IS INPUT AND SAMPLE', input, sample)
    console.log('THIS IS MY INGREDIENT DATA', ingredientData)
    setIngredients({ input, ingredientData })
  }

  const setSampleRecipe = () => setIngredientInput(sample)

  useEffect(() => {
    if (!ingredients.input?.length) setSampleRecipe()
  }, [])

  return (
    <section className={styles.slicer_wrapper} id="slicer">
      <form>
        <div>
          <Textarea />
        </div>
        <div>
          <Ingredients ingredients={ingredients.ingredientData} />
        </div>
      </form>
    </section>
  )
}
