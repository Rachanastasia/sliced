import { forwardRef, useEffect, useRef } from 'react'

export const Textarea = forwardRef(function Textarea({ onBlur }, ref) {
  let loaded = useRef()

  useEffect(() => {
    // TODO: Fix how changes here are updated in the UI
    if (loaded.current === null) loaded.current = document
    onBlur()
  }, [loaded])

  // function syncWithState() {
  //   onBlur()
  //   if (document) {
  //     if (ref.current == document.activeElement) {
  //       setTimeout(syncWithState, 2000)
  //     }
  //   }
  // }

  return (
    <fieldset>
      <textarea ref={ref} name="ingredients" maxLength={600} onBlur={onBlur} />
    </fieldset>
  )
})
