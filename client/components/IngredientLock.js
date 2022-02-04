import { IconButton } from './elements'

import styles from '../styles/modules/Recipe.module.css'

// TODO: Create tooltip to describe purpose
export function IngredientLock({ locked, onClick }) {
  return (
    <div className={styles.icon_lock_wrapper}>
      <IconButton type={locked ? 'lock' : 'unlock'} onClick={onClick} />
    </div>
  )
}
