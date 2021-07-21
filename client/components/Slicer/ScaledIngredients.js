import React, {useState} from 'react'
import Button from '../Button'
import styles from '../../styles/Slicer.module.css'
import { convertFloatToFraction } from '../../utils/displayAsFraction'
import { scaleIngredient } from '../../utils/scaleIngredient'


export default function ScaledIngredients({ingredients}) {
  const [constant, setConstant] = useState(1)
  console.log('THIS IS THE CURRENT CONSTANT', constant)
  return (
    <div className={styles.scaled_indgredients_with_button_wrapper}>
      <ul className={styles.preview_ingredients_wrapper}>
        {ingredients.map((ingredient, index) => <ScaledIngredient key={index} ingredient={ingredient} constant={constant}/>)}
      </ul>
      <SelectScaleConstant constant={constant} setConstant={setConstant} />
    </div>
  )
}

function ScaledIngredient({ingredient, constant}){
  const test = scaleIngredient({unit: ingredient?.unit, amount: ingredient?.amount}, constant)
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


function SelectScaleConstant({constant, setConstant}){

  const options = [
      {
      label: 'x 1/4',
      constant: 0.25,
      },
      {
      label: 'x 1/3',
      constant: 0.3333,
      },
      {
        label: 'x 1',
        constant: 1,
        },
      {
      label: 'x 1 1/2',
      constant: 1.5,
      },
      {
      label: 'x 3',
      constant: 3,
      },
  ]
      return (
          <div className={styles.select_amount_wrapper}>
              {options.map(o => <ConstantOption option={o} key={o.label} constant={constant} setConstant={setConstant}/>)}
          </div>
      )
  }


  function ConstantOption({option, constant, setConstant}){
    const isSelected = option.constant == constant
    console.log('THIS ONE IS SELECTED', {option, isSelected, constant})
    const buttonStyle = isSelected ? styles.button : styles.button_inverted
    return <Button buttonStyle={buttonStyle} textStyle={styles.constant_button_text} onClick={()=>setConstant(option.constant)} text={option.label} />

  }