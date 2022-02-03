import { forwardRef } from 'react'
import { Input } from './Input'
import { InputButton } from './InputButton'

import styles from '../../styles/modules/ButtonToInput.module.css'

/**
 * This component displays a button that turns into an input onClick
 *    and saves the input onBlur.
 */

export const ButtonToInput = forwardRef(function ButtonToInput(
  { active = false, text, onClick, onBlur },
  ref
) {
  return (
    <div className={styles.label_input}>
      {active ? (
        <Input ref={ref} text={text} onBlur={onBlur} />
      ) : (
        <InputButton text={text} onClick={onClick} />
      )}
    </div>
  )
})
