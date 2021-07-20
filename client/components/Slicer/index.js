import React, { useState } from 'react';
import { transformInputIntoIngredientData } from '../../utils/parseRecipeInput'

import ScaledIngredients from './ScaledIngredients'
import IngredientInput from './IngredientInput';
import Button from '../Button'
import styles from '../../styles/Slicer.module.css'

function AddRecipe({isPreview=true}) {
    const [ingredients, setIngredients] = useState({input: [], ingredientData: []})
    
    const setIngredientInput = (input) => {
        const ingredientData = transformInputIntoIngredientData(input)
        setIngredients({input, ingredientData})
    }
    return (
        <section className={styles.slicer_wrapper} >
           {isPreview && <Button text='sample recipe' onClick={()=>{}} />}
           <IngredientInput ingredients={ingredients.input} setInput={setIngredientInput}/>
           {!isPreview && <Button text='submit' />}
           {/* <ErrorText error='hi' /> */}
           {ingredients.ingredientData.length && <ScaledIngredients constant={1} ingredients={ingredients.ingredientData} />}
        </section >
    )
}


export default AddRecipe;
