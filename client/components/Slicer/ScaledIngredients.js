import React from 'react'
import styles from '../../styles/Slicer.module.css'
import { convertFloatToFraction } from '../../utils/displayAsFraction'
import { scaleIngredient } from '../../utils/scaleIngredient'
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
  const test = scaleIngredient({unit: ingredient?.unit, amount: ingredient?.amount}, 0.3)
  //value * ml/unit * constant
  //const formattedAmount = convertFloatToFraction(test?.amount?.value)
  return (
      <li  className={styles.preview_ingredient}>
          {ingredient.amount.value > 0 && <p className={styles.preview_ingredient_item}>{test?.amount?.value}</p>}
          <p className={styles.preview_ingredient_item}>{test?.unit?.name}</p>
          <p className={styles.preview_ingredient_item}>{ingredient.ingredient}</p>
      </li>
  )
}