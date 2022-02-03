import { forwardRef } from 'react'

export const Input = forwardRef(function Input({ ref, text, onBlur }) {
  return <input ref={ref} placeholder={text} onBlur={onBlur} autoFocus />
})
