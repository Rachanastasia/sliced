import { forwardRef } from 'react'
import { Input } from './Input'
import { ButtonToInput } from './ButtonToInput'
import styles from '../../styles/modules/ButtonToInput.module.css'

export const LabelInput = forwardRef(function LablelInput(
  { active = false, text, onClick },
  ref
) {
  return (
    <div className={styles.label_input}>
      {active ? (
        <Input ref={ref} text={text} onBlur={onClick} />
      ) : (
        <ButtonToInput text={text} onClick={onClick} />
      )}
    </div>
  )
})
