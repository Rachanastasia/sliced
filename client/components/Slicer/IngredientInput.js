import React from 'react'
import styles from '../../styles/Slicer.module.css'

export default function IngredientInput(){

    return (
        <form className='add-recipe-form'
        autoComplete='off'
        onSubmit={(e) => handleFormSubmit(e, recipe)}>
        <fieldset>
            <label className={styles.slicer_input_label} htmlFor='ingredients'>Ingredients</label>
            <textarea
                name='ingredients'
                className={styles.slicer_input}
                onChange={(e) => setIngredients(parseTextInput(e.target.value))}
            />
        </fieldset>
        </form>
    )
}