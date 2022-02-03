import { forwardRef } from 'react'
import { Input } from './Input'
import { InputButton } from './InputButton'
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
        <InputButton text={text} onClick={onClick} />
      )}
    </div>
  )
})
