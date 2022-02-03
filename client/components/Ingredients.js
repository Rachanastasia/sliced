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
          {ingredients.map((ingredient) => {
            return (
              <Ingredient
                key={ingredient.id}
                ingredient={ingredient}
                constant={1} // FOR TESTING
                handleActiveIngredient={(prop) =>
                  handleActiveIngredient({ id: ingredient.id, prop })
                }
                handleChangeIngredient={(prop, value) => {
                  handleChangeIngredient({ id: ingredient.id, prop, value })
                }}
                handleDeleteIngredient={() =>
                  handleDeleteIngredient({ id: ingredient.id })
                }
              />
            )
          })}
        </ul>
      )}
    </Fragment>
  )
}
