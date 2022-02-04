import { forwardRef, useEffect } from 'react'

export const Textarea = forwardRef(function Textarea({ onChange }, ref) {
  useEffect(() => {
    syncWithState()
  }, [])

  function syncWithState() {
    onChange()
    if (ref.current == document.activeElement) {
      setTimeout(syncWithState, 3000)
    }
  }

  return (
    <fieldset>
      <textarea
        ref={ref}
        name="ingredients"
        maxLength={600}
        onBlur={onChange}
      />
    </fieldset>
  )
})
