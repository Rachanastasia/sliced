import React, {Fragment} from 'react'
import styles from '../../styles/Slicer.module.css'
import { convertFloatToFraction } from '../../utils/displayAsFraction'
import { useScaledIngredient } from '../../hooks/useScaledIngredient'
import SelectConstant from './SelectConstant'

export default function ScaledIngredients({ingredients, constant, setConstant}) {
  return (
    <div className={styles.scaled_indgredients_with_button_wrapper}>
      <ul className={styles.preview_ingredients_wrapper}>
        {ingredients.map((ingredient, index) => <ScaledIngredient key={index} ingredient={ingredient} constant={constant}/>)}
      </ul>
      <SelectConstant constant={constant} setConstant={setConstant} />
    </div>
  )
}

function ScaledIngredient({ingredient, constant}){
  const formattedAmount = convertFloatToFraction(ingredient.amount.value)
  return (
      <li  className={styles.preview_ingredient}>
          {ingredient.amount.value > 0 && <p className={styles.preview_ingredient_item}>{formattedAmount}</p>}
          <p className={styles.preview_ingredient_item}>{ingredient.unit.name}</p>
          <p className={styles.preview_ingredient_item}>{ingredient.ingredient}</p>
      </li>
  )
}