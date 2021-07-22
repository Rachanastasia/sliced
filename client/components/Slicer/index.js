import React, { useState } from 'react';
import { transformInputIntoIngredientData } from '../../utils/transformInputIntoIngredientData'
import ScaledIngredients from './ScaledIngredients'
import IngredientInput from './IngredientInput';
import Button from '../Button'
import ClearButton from './ClearButton'
import styles from '../../styles/Slicer.module.css'
import {sample} from '../../utils/sampleRecipe'

function AddRecipe({isPreview=true}) {
    const [ingredients, setIngredients] = useState({input: [], ingredientData: []})
    const setIngredientInput = (input) => {
        const formattedInput = input + " "
        const ingredientData = transformInputIntoIngredientData(formattedInput)
        setIngredients({input, ingredientData})
    }

    const setSampleRecipe = () => setIngredientInput(sample)
    const clearRecipe = () => {
        setIngredients({input: [], ingredientData: []})
    }
  
    return (
        <section className={styles.slicer_wrapper}   id='slicer'>
           <IngredientInput input={ingredients.input} setInput={setIngredientInput}/>
           {!isPreview && <Button text='submit' />}
           {isPreview && <Button text='sample recipe' onClick={setSampleRecipe} />}
           <ClearButton clearInput={clearRecipe} />
           {ingredients.ingredientData.length ? <ScaledIngredients ingredients={ingredients.ingredientData} /> : null}
        </section >
    )
}


export default AddRecipe;
