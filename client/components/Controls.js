import { IconButton, Tooltip } from './elements'
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
        <Tooltip placement="top-start" text={instructions}>
          <IconButton onClick={handleShowInfo} type="info" caption />
        </Tooltip>
      </div>
    </div>
  )
}

const instructions = `Edit the sample recipe or paste your own in the textbox. To scale, press one of the amounts below and enter a different number.`
