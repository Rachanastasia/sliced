import React from 'react'

// THIS IS FROM THE OLD VERSION.
// IT IS NOT STYLED.
export function Button({
  onClick,
  text = 'submit',
  buttonStyle = undefined,
  textStyle = undefined,
  outline,
  disabled
}) {
  // buttonStyle = disabled
  //   ? `${buttonStyle} ${styles.button_disabled}`
  //   : outline
  //   ? styles.clear_button
  //   : buttonStyle
  // textStyle = `${textStyle} ${styles.button_text}`
  return (
    <button onClick={onClick} className={buttonStyle} disabled={disabled}>
      <span className={textStyle}>{text}</span>
    </button>
  )
}
