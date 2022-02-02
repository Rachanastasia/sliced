import React, { useState, useEffect, createRef } from 'react'
import styles from '../styles/modules/Slicer.module.css'
import { CONSTANT_OPTIONS } from '../config/constants'
import { Ingredient } from './Ingredient'

export function Ingredients({
  ingredients,
  handleActiveIngredient,
  handleChangeIngredient
}) {
  const originalValues = CONSTANT_OPTIONS[5]
  const [constant, setConstant] = useState(originalValues)

  useEffect(() => {
    if (constant.index !== 5) setConstant(originalValues)
  }, [ingredients])

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
                handleActiveIngredient={() =>
                  handleActiveIngredient(ingredient.id)
                }
                handleChangeIngredient={(amount) =>
                  handleChangeIngredient(ingredient.id, amount)
                }
              />
            )
          })}
        </ul>
      )}
    </div>
  )
}
