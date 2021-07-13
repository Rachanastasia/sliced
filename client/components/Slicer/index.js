import React, { useReducer } from 'react';
import { parseRecipeInput } from '../../utils/parseRecipeInput'

import ScaledIngredients from './ScaledIngredients'
import IngredientInput from './IngredientInput';
import Button from '../Button'
import styles from '../../styles/Slicer.module.css'
import {SET_TITLE, SET_INGREDIENTS} from '../../config/constants.js'

function reducer(state, action){
    if (action.type === SET_TITLE){
        return {...state, title: action.title}
    } else if (action.type === SET_INGREDIENTS) {
        const parsedIngredients = parseRecipeInput(input)
        return {title: state.title, ingredients: action.input, parsedIngredients}
    } else {
        return state
    }
}


function AddRecipe({ingredients='', isPreview=true, onSubmit=()=>{}}) {
   const [state, dispatch] = useReducer(reducer, {title: null, ingredients: '', parsedIngredients: []})
    const testIngredients = [{amount: 1, unit: 'tsp', title: 'soy sauce'}, {amount: 0.5, unit: 'tbsp', title: 'white vinegar'}, {amount: 0.5, unit: 'tsp', title: 'crushed garlic'},]
    //TODO: Have sample recipe that can copy to clipboard
    //TODO: Make title input for if not preview

    const setIngredients = (input) => dispatch({type: SET_INGREDIENTS, input })
    const setTitle = (title) => dispatch({type: SET_TITLE, title})

    return (
        <section className={styles.slicer_wrapper} >
           {isPreview && <Button text='sample recipe' onClick={()=>{}} />}
           <IngredientInput ingredients={state.ingredients} setIngredients={setIngredients}/>
           {!isPreview && <Button text='submit' onClick={onSubmit} />}
           {/* <ErrorText error='hi' /> */}
           {!state?.parsedIngredients?.length && <ScaledIngredients constant={1} ingredients={testIngredients} />}
        </section >
    )
}


export default AddRecipe;
