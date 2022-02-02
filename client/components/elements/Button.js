import React from 'react'
import styles from '../../styles/modules/ect.module.css'

export function Button({
  onClick,
  text = 'submit',
  buttonStyle = styles.button,
  textStyle = undefined,
  outline,
  disabled
}) {
  buttonStyle = disabled
    ? `${buttonStyle} ${styles.button_disabled}`
    : outline
    ? styles.clear_button
    : buttonStyle
  textStyle = `${textStyle} ${styles.button_text}`
  return (
    <button onClick={onClick} className={buttonStyle} disabled={disabled}>
      <span className={textStyle}>{text}</span>
    </button>
  )
}
