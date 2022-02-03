import { Button, IconButton } from './elements'

import styles from '../styles/modules/Recipe.module.css'

export function Controls({ handlePaste, handleSetSample, handleShowInfo }) {
  // function to paste passed  here
  return (
    <div className={styles.controls}>
      <IconButton onClick={handlePaste} type="paste" caption />
      <IconButton onClick={handleSetSample} type="example" caption />
      <IconButton onClick={handleShowInfo} type="info" caption />
    </div>
  )
}
