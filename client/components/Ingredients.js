import React, { Fragment } from 'react'

import { Ingredient } from './Ingredient'

import styles from '../styles/modules/Recipe.module.css'

export function Ingredients({
  ingredients,
  handleActiveIngredient,
  handleChangeIngredient,
  handleDeleteIngredient
}) {
  return (
    <Fragment>
      {ingredients && (
        <ul className={styles.ingredients}>
          {ingredients.map((ingredient, index) => {
            return (
              <Ingredient
                key={index}
                ingredient={ingredient}
                constant={1} // FOR TESTING
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
