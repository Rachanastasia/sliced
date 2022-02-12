import { Textarea } from './elements'
import { Controls } from './Controls'

import styles from '../styles/modules/Recipe.module.css'
import { forwardRef } from 'react'

export const RecipeControls = forwardRef(function RecipeControls(
  {
    error,
    isRounded,
    handlePaste,
    handleSetExample,
    handleStateInput,
    handleToggleRounding
  },
  ref
) {
  return (
    <div className={styles.recipe_controls}>
      <Controls
        error={error}
        isRounded={isRounded}
        handlePaste={handlePaste}
        handleSetExample={handleSetExample}
        handleToggleRounding={handleToggleRounding}
      />
      <Textarea ref={ref} onBlur={handleStateInput} />
    </div>
  )
})
