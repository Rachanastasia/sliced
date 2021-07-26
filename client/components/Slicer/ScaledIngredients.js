import React, {useState, useEffect} from 'react'
import Button from '../Button'
import styles from '../../styles/Slicer.module.css'
import { convertFloatToFraction } from '../../utils/displayAsFraction'
import { scaleIngredient } from '../../utils/scaleIngredient'
import { CONSTANT_OPTIONS } from '../../config/constants'


export default function ScaledIngredients({ingredients}) {
  const [constant, setConstant] = useState(1)

  useEffect(()=>{
    if (constant !== 1) setConstant(1)
  }, [ingredients])
  
  return (
    <div className={styles.scaled_indgredients_with_slider}>
    <SelectScaleConstant constant={constant} setConstant={setConstant} />
      {ingredients && <ul className={styles.preview_ingredients_wrapper}>
        {ingredients.map((ingredient, index) => <ScaledIngredient key={index} ingredient={ingredient} constant={constant}/>)}
      </ul>}
    </div>
  )
}

function ScaledIngredient({ingredient, constant}){
  const scaledIngredient = scaleIngredient({unit: ingredient?.unit, amount: ingredient?.amount}, constant)
  const formattedAmount = convertFloatToFraction(scaledIngredient.amount)
  const formattedUnit = Number(scaledIngredient.amount) > 1 ?  scaledIngredient.unit.name + 's' : scaledIngredient.unit.name
  return (
      <li  className={styles.preview_ingredient}>
          {ingredient.amount > 0 && <p className={styles.preview_ingredient_item}>{formattedAmount}</p>}
          <p className={`${styles.preview_ingredient_item} ${styles.preview_unit_item}`}>{ingredient.unit?.name && formattedUnit}</p>
          <p  className={`${styles.preview_ingredient_item} ${styles.preview_ingredient_item}`}>{ingredient.ingredient}</p>
      </li>
  )
}

const SELECT_FROM = [ 0.25, 0.3333, 0.5, 0.666, 0.75, 1, 1.5, 2, 3, 4, 6]

function SelectScaleConstant({constant, setConstant}){
  const min = 0
  const max = SELECT_FROM[SELECT_FROM.length - 1]
      return (
          <div >
            <form>
              <input type='range' defaultValue={1} min={min} step={'any'} max={max} list="options" onChange={(e)=>setConstant(e.target.value)} />
              <datalist id="options">
                  {SELECT_FROM.map((item)=><option value={item} id={item} label={`${item}`}>{item}</option>)}
              </datalist>
              </form>
          </div>
      )
  }