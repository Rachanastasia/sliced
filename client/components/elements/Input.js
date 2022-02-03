import { forwardRef } from 'react'

export const Input = forwardRef(function Input({ text, onBlur }, ref) {
  return (
    <input
      ref={ref}
      placeholder={text}
      onBlur={onBlur}
      onClick={onBlur}
      autoFocus
    />
  )
})
