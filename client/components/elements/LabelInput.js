import { forwardRef } from 'react'
import styles from '../../styles/modules/Recipe.module.css'

export const LabelInput = forwardRef(function LablelInput(
  { active = false, text },
  ref
) {
  return (
    <div className={styles.label_input}>
      {active ? <Input ref={ref} /> : <p class="label-input">{text}</p>}
    </div>
  )
})

export const Input = forwardRef(function Input({ ref, text }) {
  return <input ref={ref} placeholder={text} />
})
