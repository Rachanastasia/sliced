import { IconButton } from './elements'

import styles from '../styles/modules/Recipe.module.css'
import { forwardRef } from 'react'

export const IngredientLock = forwardRef(function IngredientLock(
  { locked, onClick },
  ref
) {
  return (
    <div className={styles.icon_lock_wrapper} ref={ref}>
      <IconButton type={locked ? 'lock' : 'unlock'} onClick={onClick} />
    </div>
  )
})
