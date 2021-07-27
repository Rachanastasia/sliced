import React, {useEffect, useRef} from 'react'
import styles from '../../styles/Slicer.module.css'

export default function IngredientInput({setInput, input}){
    const inputRef = useRef(null)
    const onChange = value => setInput(value.target.value)

    // useEffect(()=>{
    //     inputRef.current.focus()
    // },[])

    return (
        <form className='add-recipe-form'
            autoComplete='off'>
        <fieldset>
            <label className={styles.slicer_input_label} htmlFor='ingredients'>Ingredients</label>
            <textarea
                ref={inputRef}
                name='ingredients'
                className={styles.slicer_input}
                onChange={onChange}
                value={input}
            />
        </fieldset>
        </form>
    )
}