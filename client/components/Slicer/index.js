import React, { useState } from 'react';
import { transformInputIntoIngredientData } from '../../utils/parseRecipeInput'
import ScaledIngredients from './ScaledIngredients'
import IngredientInput from './IngredientInput';
import Button from '../Button'
import ClearButton from './ClearButton'
import styles from '../../styles/Slicer.module.css'
import {sample} from '../../utils/sampleRecipe'

function AddRecipe({isPreview=true}) {
    const [ingredients, setIngredients] = useState({input: [], ingredientData: []})
    const [constant, setConstant] = useState(1)
    const setIngredientInput = (input) => {
        const ingredientData = transformInputIntoIngredientData(input)
        setIngredients({input, ingredientData})
    }

    const setSampleRecipe = () => setIngredientInput(sample)
    const clearRecipe = () => setIngredients({input: [], ingredientData: []})
    return (
        <section className={styles.slicer_wrapper} >
           <IngredientInput input={ingredients.input} setInput={setIngredientInput}/>
           {!isPreview && <Button text='submit' />}
           <ClearButton clearInput={clearRecipe} />
           {isPreview && <Button text='sample recipe' onClick={setSampleRecipe} />}
           {ingredients.ingredientData.length ? <ScaledIngredients constant={constant} ingredients={ingredients.ingredientData} constant={setConstant} /> : null}
        </section >
    )
}


export default AddRecipe;
