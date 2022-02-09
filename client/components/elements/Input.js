import { forwardRef } from 'react'

export const Input = forwardRef(function Input(
  { text, onBlur, maxLength },
  ref
) {
  function handleCloseOnEnter(e) {
    if (e.key === 'Enter') {
      onBlur()
    }
  }
  return (
    <input
      ref={ref}
      placeholder={text}
      onBlur={onBlur}
      onClick={onBlur}
      autoFocus
      autoComplete="off"
      maxLength={maxLength}
      onKeyPress={handleCloseOnEnter}
    />
  )
})
