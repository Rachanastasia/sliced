import { Textarea } from './elements'
import { Controls } from './Controls'

import styles from '../styles/modules/Recipe.module.css'
import { forwardRef } from 'react'

export const RecipeControls = forwardRef(function RecipeControls(
  { error, handlePaste, handleSetExample, handleStateInput },
  ref
) {
  return (
    <div className={styles.recipe_controls}>
      <Controls
        error={error}
        handlePaste={handlePaste}
        handleSetExample={handleSetExample}
      />
      <Textarea ref={ref} onBlur={handleStateInput} />
    </div>
  )
})
