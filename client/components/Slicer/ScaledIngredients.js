import React, {useState, useEffect} from 'react'
import styles from '../../styles/modules/Slicer.module.css'
import { convertFloatToFraction } from '../../utils/displayAsFraction'
import { scaleIngredient } from '../../utils/scaleIngredient'
import { CONSTANT_OPTIONS } from '../../config/constants'

export default function ScaledIngredients({ingredients}) {
  const originalValues = CONSTANT_OPTIONS[5]
  const [constant, setConstant] = useState(originalValues)

  console.log('THIS IS MY CONSTANT', constant)

  useEffect(()=>{
    if (constant.index !== 5) setConstant(originalValues)
  }, [ingredients])

  return (
    <div className={styles.scaled_indgredients_with_slider}>
    <SelectScaleConstant constant={constant} setConstant={setConstant} />
      {ingredients && <ul className={styles.preview_ingredients_wrapper}>
        {ingredients.map((ingredient, index) => <ScaledIngredient key={index} ingredient={ingredient} constant={constant.value}/>)}
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


function SelectScaleConstant({constant, setConstant}){
  const handleSetConstant = e => {
    const index = e?.target?.value
    const option = CONSTANT_OPTIONS[index]
    setConstant(option)
  }

      return (
          <div >
            <form>
              <input type='range' value={constant.index} className={styles.input_range} min={0} step={1} max={10} list="options" onChange={handleSetConstant} />
              <datalist id="options">
                  {CONSTANT_OPTIONS.map((item)=><option value={item.index} key={item.label} id={item.index} label={item.lable}>{item.label}</option>)}
              </datalist>
              </form>
          </div>
      )
  }