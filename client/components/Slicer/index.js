import React, { useState, useEffect, useContext } from 'react';
import { parseTextInput } from '../../utils/parseRecipeInput'

import ScaledIngredients from './ScaledIngredients'
import IngredientInput from './IngredientInput';
import ErrorText from './ErrorText';

import '../../styles/Slicer.module.css'

function AddRecipe({ingredients=[]}) {
    // const [title, setTitle] = useState('');
    // const [ingredients, setIngredients] = useState('');
    // const [preview, setPreview] = useState(false);

    // useEffect(() => { }, [preview])

    // const handleFormSubmit = async (e, recipe) => {
    //     e.preventDefault();
    //     try {
    //         if (!title.length) {
    //             setError('Please enter a title')
    //             return true;
    //         }
    //         if (!ingredients.length) {
    //             setError('Please enter ingredients')
    //             return true;
    //         }
    //         //await UserRecipesApiService.createRecipe(recipe)
    //         //setUpdate(!update)
    //         //props.history.push('/recipe')
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }

    // }



    // const recipe = {
    //     title: title,
    //     ingredients: ingredients,
    // }

    //TODO: Have sample recipe that can copy to clipboard

    return (
        <section className='add_section' >
           <IngredientInput />
           {/* <ErrorText error='hi' /> */}
                {!ingredients.length
                    ? null
                    : <ScaledIngredients ingredients={ingredients} />}
        </section >
    )
}


export default AddRecipe;
