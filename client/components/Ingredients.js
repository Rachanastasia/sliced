import React, { Fragment } from 'react'
import Tippy, { useSingleton } from '@tippyjs/react'
import { Ingredient } from './Ingredient'

import styles from '../styles/modules/Recipe.module.css'

export function Ingredients({
  ingredients,
  handleActiveIngredient,
  handleChangeIngredient,
  handleDeleteIngredient,
  handleLockedIngredient
}) {
  const lockSingleton = useSingleton()
  const closeSingleton = useSingleton()
  return (
    <Fragment>
      <Tippy singleton={lockSingleton[0]} placement="right" />
      <Tippy singleton={closeSingleton[0]} placement="left" />
      {ingredients && (
        <ul className={styles.ingredients}>
          {ingredients.map((ingredient) => {
            return (
              <Ingredient
                lockSingleton={lockSingleton[1]}
                closeSingleton={closeSingleton[1]}
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
                handleLockedIngredient={() =>
                  handleLockedIngredient({ id: ingredient.id })
                }
              />
            )
          })}
        </ul>
      )}
    </Fragment>
  )
}
