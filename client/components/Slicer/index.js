import React, { useReducer } from 'react';
import { parseRecipeInput } from '../../utils/parseRecipeInput'

import ScaledIngredients from './ScaledIngredients'
import IngredientInput from './IngredientInput';
import Button from '../Button'
import styles from '../../styles/Slicer.module.css'
import {SET_TITLE, SET_INGREDIENTS} from '../../constants.js'

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
           {!state?.parsedIngredients?.length && <ScaledIngredients ingredients={state.parsedIngredients} />}
        </section >
    )
}


export default AddRecipe;
