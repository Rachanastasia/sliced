import { forwardRef, useRef } from 'react'

import { ButtonToInput, Dropdown, IconButton } from './elements'

import styles from '../styles/modules/Recipe.module.css'

export const Ingredient = forwardRef(function IngredientItem(
  {
    ingredient,
    handleActiveIngredient,
    handleChangeIngredientAmount,
    handleChangeIngredientName,
    handleDeleteIngredient
  },
  ref
) {
  const amountRef = useRef('')
  const ingredientRef = useRef('')

  function handleChangeIngredientAmount() {
    handleChangeIngredientAmount(amountRef.current.value)
  }

  function handleChangeIngredientName() {
    handleChangeIngredientName(ingredientRef.current.value)
  }

  return (
    <li className={styles.ingredient}>
      <div className={styles.close_wrapper}>
        <IconButton type="close" onClick={handleDeleteIngredient} />
      </div>
      <div className={styles.ingredient_content}>
        <ButtonToInput
          text={ingredient?.amount}
          ref={amountRef}
          active={ingredient.active}
          onClick={handleActiveIngredient}
          onBlur={handleChangeIngredientAmount}
        />
        <Dropdown unit={ingredient.unit} />
        <ButtonToInput
          text={ingredient.ingredient}
          ref={ingredientRef}
          onClick={handleActiveIngredient}
          onBlur={handleChangeIngredientName}
        />
        <IconButton type="lock" disabled />
      </div>
    </li>
  )
})
