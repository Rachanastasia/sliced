import React, { useState, useEffect, Fragment } from 'react'
import styles from '../styles/modules/Recipe.module.css'

import { CONSTANT_OPTIONS } from '../config/constants'
import { Ingredient } from './Ingredient'

export function Ingredients({
  ingredients,
  handleActiveIngredient,
  handleChangeIngredient,
  handleDeleteIngredient
}) {
  const originalValues = CONSTANT_OPTIONS[5]
  const [constant, setConstant] = useState(originalValues)

  // useEffect(() => {
  //   if (constant.index !== 5) setConstant(originalValues)
  // }, [ingredients])

  return (
    <Fragment>
      {ingredients && (
        <ul className={styles.ingredients}>
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
                handleDeleteIngredient={() =>
                  handleDeleteIngredient(ingredient.id)
                }
              />
            )
          })}
        </ul>
      )}
    </Fragment>
  )
}
