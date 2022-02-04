import { forwardRef, useEffect } from 'react'

export const Textarea = forwardRef(function Textarea({ onChange }, ref) {
  useEffect(() => {
    syncWithState()
  }, [document.activeElement])

  function syncWithState() {
    onChange()
    if (ref.current == document.activeElement) {
      setTimeout(syncWithState, 2000)
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
