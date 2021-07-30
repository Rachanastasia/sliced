import styles from '../../styles/modules/Slicer.module.css'

export default function IngredientInput({setInput, input}){
    const onChange = value => setInput(value.target.value)

    return (
        <form className='add-recipe-form'
            autoComplete='off'>
        <fieldset>
            <label className={styles.slicer_input_label} htmlFor='ingredients'>Ingredients</label>
            <textarea
                name='ingredients'
                className={styles.slicer_input}
                onChange={onChange}
                value={input}
            />
        </fieldset>
        </form>
    )
}