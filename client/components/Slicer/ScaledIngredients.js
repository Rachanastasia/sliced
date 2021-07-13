import React from 'react'
import { useScaledIngredient } from '../../hooks/useScaledIngredient'


export default function ScaledIngredients({ingredients, constant}) {
  return (
    <>
    <ul className='ingredients_wrapper'>
      {ingredients.map(ingredient => <ScaledIngredient inputIngredient={ingredient} constant={constant}/>)}
    </ul>
    </>

  )
}

function ScaledIngredient({inputIngredient, constant}){
const startingIngredient = {startingAmount: inputIngredient.amount, startingUnit: inputIngredient.unit}


const scaledIngredient = useScaledIngredient(startingIngredient, constant)
console.log('THIS IS STARTING INGREDEINT', scaledIngredient)

  return (
    <li  className=' preview_item'>
          <p className='ing_title'>{inputIngredient?.title}</p>
      </li>
  )
}