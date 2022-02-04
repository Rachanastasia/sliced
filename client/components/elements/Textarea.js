import { forwardRef } from 'react'

export const Textarea = forwardRef(function Textarea({ onChange }, ref) {
  return (
    <fieldset>
      <textarea
        ref={ref}
        name="ingredients"
        onChange={onChange}
        maxLength={600}
      />
    </fieldset>
  )
})
