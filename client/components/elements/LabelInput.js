import { forwardRef } from 'react'

export const LabelInput = forwardRef(function LablelInput(
  { active = false, text },
  ref
) {
  return (
    <div>
      {active ? <Input ref={ref} /> : <p class="label-input">{text}</p>}
    </div>
  )
})

export const Input = forwardRef(function Input({ ref, text }) {
  return <input ref={ref} placeholder={text} />
})
