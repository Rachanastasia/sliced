import { forwardRef } from 'react'

import { LabelInput, Dropdown, CloseButton } from './elements'
import { convertFloatToFraction, scaleIngredient } from '../utils'

import styles from '../styles/modules/Recipe.module.css'

export const Ingredient = forwardRef(function IngredientItem(
  {
    ingredient,
    constant,
    handleActiveIngredient,
    handleChangeIngredient,
    handleDeleteIngredient
  },
  ref
) {
  const scaledIngredient = scaleIngredient(
    { unit: ingredient?.unit, amount: ingredient?.amount },
    (constant = 1)
  )
  const formattedAmount = convertFloatToFraction(scaledIngredient.amount)
  return (
    <li className={styles.ingredient}>
      <CloseButton onClick={handleDeleteIngredient} />
      <LabelInput
        text={formattedAmount}
        ref={ref}
        active={ingredient.active}
        onClick={handleActiveIngredient}
      />
      <Dropdown unit={ingredient.unit} />
      <LabelInput text={ingredient.ingredient} />
    </li>
  )
})
