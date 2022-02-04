import { forwardRef, useEffect } from 'react'

export const Textarea = forwardRef(function Textarea({ onBlur }, ref) {
  useEffect(() => {
    // TODO: Fix how this works. It doesn't re-run the effect when the document loads
    // and needs a dep to base the effect off of
    syncWithState()
  }, [])

  function syncWithState() {
    onBlur()
    if (document) {
      if (ref.current == document.activeElement) {
        setTimeout(syncWithState, 2000)
      }
    }
  }

  return (
    <fieldset>
      <textarea ref={ref} name="ingredients" maxLength={600} onBlur={onBlur} />
    </fieldset>
  )
})
