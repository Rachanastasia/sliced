import { useState } from 'react'
import { IconButton } from './elements'

import styles from '../styles/modules/Recipe.module.css'

// TODO: Create tooltip to describe purpose
export function IngredientLock({ onClick }) {
  const [locked, setLocked] = useState(true)
  function handleToggleLock() {
    setLocked(!locked)
  }
  return (
    <div className={styles.icon_lock_wrapper}>
      <IconButton
        type={locked ? 'lock' : 'unlock'}
        onClick={handleToggleLock}
      />
    </div>
  )
}
