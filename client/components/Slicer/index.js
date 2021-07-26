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
           {isPreview ? <Button text='sample recipe' onClick={setSampleRecipe} /> : <Button text='save' />}
           <ClearButton clearInput={clearRecipe} />
        </div>
    )
}


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