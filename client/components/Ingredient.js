import { forwardRef } from 'react'

import { LabelInput, Dropdown } from './elements'
import { convertFloatToFraction, scaleIngredient } from '../utils'

import styles from '../styles/modules/Slicer.module.css'

// This should come into the
export const Ingredient = forwardRef(function IngredientItem(
  { ingredient, constant },
  ref
) {
  const scaledIngredient = scaleIngredient(
    { unit: ingredient?.unit, amount: ingredient?.amount },
    (constant = 1)
  )
  const formattedAmount = convertFloatToFraction(scaledIngredient.amount)
  return (
    <li className={styles.preview_ingredient}>
      <LabelInput text={formattedAmount} ref={ref} />
      <Dropdown unit={ingredient.unit} />
      <LabelInput text={ingredient.ingredient} />
    </li>
  )
})
