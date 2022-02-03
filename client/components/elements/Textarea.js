import { forwardRef } from 'react'
// import styles from '../../styles/modules/ect.module.css'

export const Textarea = forwardRef(function Textarea({ input, onChange }, ref) {
  return (
    <fieldset>
      <textarea
        ref={ref}
        name="ingredients"
        // className={styles.slicer_input}
        onChange={onChange}
      />
    </fieldset>
  )
})
