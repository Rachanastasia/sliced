import React from 'react'
import styles from '../../styles/Slicer.module.css'
import { useScaledIngredient } from '../../hooks/useScaledIngredient'


export default function ScaledIngredients({ingredients, constant}) {
  return (
    <ul className={styles.preview_ingredients_wrapper}>
      {ingredients.map(ingredient => <ScaledIngredient ingredient={ingredient} constant={constant}/>)}
    </ul>
  )
}

function ScaledIngredient({ingredient, constant}){
  return (
      <li  className={styles.preview_ingredient}>
          <p className={styles.preview_ingredient_item}>{ingredient.amount.value}</p>
          <p className={styles.preview_ingredient_item}>{ingredient.unit.name}</p>
          <p className={styles.preview_ingredient_item}>{ingredient.ingredient}</p>
      </li>
  )
}