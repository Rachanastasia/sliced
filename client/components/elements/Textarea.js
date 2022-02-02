import styles from '../../styles/modules/ect.module.css'

export function Textarea({ input, onChange }) {
  return (
    <fieldset>
      {/* <label className={styles.slicer_input_label} htmlFor="ingredients">
        Ingredients
      </label> */}
      <textarea
        name="ingredients"
        className={styles.slicer_input}
        onChange={onChange}
        value={input}
      />
    </fieldset>
  )
}
