import { Textarea } from './elements'
import styles from '../styles/modules/Recipe.module.css'

export function RecipeControls({ input }) {
  return (
    <div>
      <span className={styles.caption}>
        Copy and paste your favorite recipe below.
      </span>
      <Textarea input={input} />
    </div>
  )
}
