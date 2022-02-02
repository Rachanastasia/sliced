import { LabelInput } from './LabelInput'
import { Dropdown } from './Dropdown'
import { convertFloatToFraction } from '../../utils/displayAsFraction'
import { scaleIngredient } from '../../utils/scaleIngredient'

import styles from '../../styles/modules/Slicer.module.css'

// This should come into the
export function IngredientItem({ ingredient, constant }) {
  const scaledIngredient = scaleIngredient(
    { unit: ingredient?.unit, amount: ingredient?.amount },
    (constant = 1)
  )
  const formattedAmount = convertFloatToFraction(scaledIngredient.amount)
  // const formattedUnit =
  //   Number(scaledIngredient.amount) > 1
  //     ? scaledIngredient.unit.name + 's'
  //     : scaledIngredient.unit.name
  return (
    <li className={styles.preview_ingredient}>
      <LabelInput text={formattedAmount} />
      <Dropdown unit={ingredient.unit} />
      <LabelInput text={ingredient.ingredient} />
    </li>
  )
}
