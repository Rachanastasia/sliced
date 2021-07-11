import React from 'react'

export default function IngredientInput(){

    return (
        <form className='add-recipe-form'
        autoComplete='off'
        onSubmit={(e) => handleFormSubmit(e, recipe)}>
        <fieldset>
            <label htmlFor='title'>Title</label>
            <input
                name='title'
                type='text'
                onChange={(e) => {
                    setError(null)
                    setTitle(e.target.value)
                }}
                placeholder='Crispy chocolate chip cookies' />
        </fieldset>
        <fieldset>
            <label htmlFor='ingredients'>Ingredients</label>
            <textarea
                name='ingredients'
                onChange={(e) => setIngredients(parseTextInput(e.target.value))}
            />
        </fieldset>
        </form>
    )
}