import { forwardRef } from 'react'

export const Input = forwardRef(function Input({ text, onBlur }, ref) {
  console.log('THIS IS MY REF', ref.current?.value)
  return <input ref={ref} placeholder={text} onBlur={onBlur} autoFocus />
})
