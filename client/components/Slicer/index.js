import React, { useState, useEffect } from 'react';
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

    console.log('THIS HERE', ingredients)

    const setSampleRecipe = () => setIngredientInput(sample)
    const clearRecipe = () => {
        setIngredients({input: [], ingredientData: []})
    }

    useEffect(()=>{
        if (!ingredients.input?.length) setSampleRecipe()
    },[])
  
    return (
        <section className={styles.slicer_wrapper}   id='slicer'>
            {isPreview && <h2 className={styles.preview_title}>Try Sliced</h2>}
            <div className={styles.input_button_wrapper}>
                <IngredientInput input={ingredients.input} setInput={setIngredientInput}/>
                <SampleAndClearButtons isPreview={isPreview} setSampleRecipe={setSampleRecipe} clearRecipe={clearRecipe} />
           </div>
           <ScaledIngredients ingredients={ingredients.ingredientData} />
        </section >
    )
}


export default AddRecipe;


function SampleAndClearButtons({isPreview, setSampleRecipe, clearRecipe}){
    return (
        <div className={styles.button_wrapper}>
            <ClearButton clearInput={clearRecipe} />
           {isPreview ? <Button text='sample recipe' onClick={setSampleRecipe} /> : <Button text='save' />}
        </div>
    )
}
