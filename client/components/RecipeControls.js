import { Textarea } from './elements'
import { Controls } from './Controls'

import styles from '../styles/modules/Recipe.module.css'

export function RecipeControls({ input, handlePaste, handleSetExample }) {
  return (
    <div className={styles.recipe_controls}>
      <Controls handlePaste={handlePaste} handleSetExample={handleSetExample} />
      <Textarea input={input} />
    </div>
  )
}
