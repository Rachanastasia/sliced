import { Textarea } from './elements'
import { Controls } from './Controls'

import styles from '../styles/modules/Recipe.module.css'
import { forwardRef } from 'react'

export const RecipeControls = forwardRef(function RecipeControls(
  { handlePaste, handleSetExample },
  ref
) {
  return (
    <div className={styles.recipe_controls}>
      <Controls handlePaste={handlePaste} handleSetExample={handleSetExample} />
      <Textarea ref={ref} />
    </div>
  )
})

// This PR

// 1. handle copy and pasting
// 2. handle modal for instructions
// 4. add different custom font in Next header
// 6. add max length to texarea (and error)
// 8. handle errors and clear onBlur anywhere

// Long Term

// add button to create empty ingredient
// Fix UI
// Add footer back
// Add about section back
// Add tooltips and mobile options
// Make menu for Slicer controls
