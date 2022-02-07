import { IconButton } from './elements'
import { InstructionsOrError } from './InstructionsOrError'
import Tippy from '@tippyjs/react'
import styles from '../styles/modules/Recipe.module.css'

export function Controls({
  error,
  handlePaste,
  handleSetExample,
  handleShowInfo
}) {
  function renderContent() {
    return (
      <div>
        <h1> YOYOYOYOYO</h1>
      </div>
    )
  }
  return (
    <div className={styles.controls_wrapper}>
      <InstructionsOrError error={error} />
      <div className={styles.controls}>
        <IconButton onClick={handlePaste} type="paste" caption />
        <IconButton onClick={handleSetExample} type="example" caption />
        <Tippy
          content={renderContent()}
          placement="right"
          trigger="mouseover click"
        >
          <IconButton onClick={handleShowInfo} type="info" caption />
        </Tippy>
      </div>
    </div>
  )
}
