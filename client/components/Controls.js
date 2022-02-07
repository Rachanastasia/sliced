import { IconButton } from './elements'
import { InstructionsOrError } from './InstructionsOrError'

import styles from '../styles/modules/Recipe.module.css'

export function Controls({
  error,
  handlePaste,
  handleSetExample,
  handleShowInfo
}) {
  return (
    <div className={styles.controls_wrapper}>
      <InstructionsOrError error={error} />
      <div className={styles.controls}>
        <IconButton onClick={handlePaste} type="paste" caption />
        <IconButton onClick={handleSetExample} type="example" caption />
        <IconButton onClick={handleShowInfo} type="info" disabled caption />
      </div>
    </div>
  )
}
