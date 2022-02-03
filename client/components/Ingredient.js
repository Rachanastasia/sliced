import { forwardRef, useRef } from 'react'

import { ButtonToInput, Dropdown, IconButton } from './elements'

import styles from '../styles/modules/Recipe.module.css'

export const Ingredient = forwardRef(function IngredientItem(
  {
    ingredient,
    handleActiveIngredient,
    handleChangeIngredient,
    handleDeleteIngredient
  },
  ref
) {
  const amountRef = useRef('')
  const ingredientRef = useRef('')

  function handleChangeIngredientAmount() {
    const newAmount = amountRef.current.value
    if (Boolean(newAmount)) handleActiveIngredient()
    // deactivate if empty string
    else handleChangeIngredient('amount', newAmount)
  }

  function handleChangeIngredientName() {
    const newName = ingredientRef.current.value
    if (Boolean(newName)) handleActiveIngredient()
    // deactivate if empty string
    else handleChangeIngredient('name', newName)
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
          onClick={handleActiveIngredient}
          onBlur={handleChangeIngredientAmount}
        />
        <Dropdown unit={ingredient.unit} />
        <ButtonToInput
          text={ingredient.ingredient}
          ref={ingredientRef}
          active={ingredient.active}
          onClick={handleActiveIngredient}
          onBlur={handleChangeIngredientName}
        />
        <IconButton type="lock" disabled />
      </div>
    </li>
  )
})
