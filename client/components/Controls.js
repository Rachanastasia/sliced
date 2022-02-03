import { Error, IconButton } from './elements'

import styles from '../styles/modules/Recipe.module.css'

export function Controls({
  error,
  handlePaste,
  handleSetExample,
  handleShowInfo
}) {
  // function to paste passed  here
  return (
    <div className={styles.controls_wrapper}>
      <Error error={error} />
      <div className={styles.controls}>
        <IconButton onClick={handlePaste} type="paste" caption />
        <IconButton onClick={handleSetExample} type="example" caption />
        <IconButton onClick={handleShowInfo} type="info" caption />
      </div>
    </div>
  )
}
