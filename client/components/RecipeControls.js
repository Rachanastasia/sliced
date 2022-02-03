import { Textarea } from './elements'
import { Controls } from './Controls'

import styles from '../styles/modules/Recipe.module.css'

export function RecipeControls({ input }) {
  return (
    <div className={styles.recipe_controls}>
      <Controls />
      <Textarea input={input} />
    </div>
  )
}
