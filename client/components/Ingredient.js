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

  function handleActiveIngredientName() {
    handleActiveIngredient('name')
  }

  function handleActiveIngredientAmount() {
    handleActiveIngredient('amount')
  }

  function handleChangeIngredientAmount() {
    const newAmount = amountRef.current.value
    if (Boolean(newAmount)) handleActiveIngredientAmount()
    // deactivate if empty string
    else handleChangeIngredient('amount', newAmount)
  }

  function handleChangeIngredientName() {
    const newName = ingredientRef.current.value
    if (Boolean(newName)) handleActiveIngredientName()
    // deactivate if empty string
    else handleChangeIngredient('name', newName)
  }

  return (
    <li className={styles.ingredient}>
      <div className={styles.icon_wrapper}>
        <IconButton type="close" onClick={handleDeleteIngredient} />
      </div>
      <div className={styles.ingredient_content}>
        <ButtonToInput
          text={ingredient?.amount}
          ref={amountRef}
          active={ingredient.active === 'amount'}
          onClick={handleActiveIngredientAmount}
          onBlur={handleChangeIngredientAmount}
        />
        <Dropdown unit={ingredient.unit} />
        <ButtonToInput
          text={ingredient.ingredient}
          ref={ingredientRef}
          active={ingredient.active === 'name'}
          onClick={handleActiveIngredientName}
          onBlur={handleChangeIngredientName}
        />
      </div>
      <div className={styles.icon_wrapper}>
        <IconButton type="lock" disabled />
      </div>
    </li>
  )
})
