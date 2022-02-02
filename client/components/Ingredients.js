import React, { useState, useEffect, createRef } from 'react'
import styles from '../styles/modules/Slicer.module.css'
import { CONSTANT_OPTIONS } from '../config/constants'
import { Ingredient } from './Ingredient'

export function Ingredients({ ingredients }) {
  const originalValues = CONSTANT_OPTIONS[5]
  const [constant, setConstant] = useState(originalValues)

  useEffect(() => {
    console.log('THESE ARE MY INGREDIENTS', ingredients)
    if (constant.index !== 5) setConstant(originalValues)
  }, [ingredients])

  // use ingredient data returns an array with refs attached
  // meaning ingredinet has ref

  return (
    <div className={styles.scaled_indgredients_with_slider}>
      {ingredients && (
        <ul className={styles.preview_ingredients_wrapper}>
          {ingredients.map((ingredient, index) => {
            return (
              <Ingredient
                key={index}
                ingredient={ingredient}
                constant={constant.value}
              />
            )
          })}
        </ul>
      )}
    </div>
  )
}
