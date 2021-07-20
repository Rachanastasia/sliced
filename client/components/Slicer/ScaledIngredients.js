import React, {Fragment} from 'react'
import styles from '../../styles/Slicer.module.css'
import { useScaledIngredient } from '../../hooks/useScaledIngredient'
import SelectConstant from './SelectConstant'

export default function ScaledIngredients({ingredients, constant, setConstant}) {
  return (
    <Fragment>
      <SelectConstant constant={constant} setConstant={setConstant} />
      <ul className={styles.preview_ingredients_wrapper}>
        {ingredients.map(ingredient => <ScaledIngredient ingredient={ingredient} constant={constant}/>)}
      </ul>
    </Fragment>
  )
}

function ScaledIngredient({ingredient, constant}){
  return (
      <li  className={styles.preview_ingredient}>
          {ingredient.amount.value > 0 && <p className={styles.preview_ingredient_item}>{ingredient.amount.value}</p>}
          <p className={styles.preview_ingredient_item}>{ingredient.unit.name}</p>
          <p className={styles.preview_ingredient_item}>{ingredient.ingredient}</p>
      </li>
  )
}