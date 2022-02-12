import { IconButton, Tooltip } from './elements'
import { InstructionsOrError } from './InstructionsOrError'

import styles from '../styles/modules/Recipe.module.css'

export function Controls({
  isRounded,
  error,
  handlePaste,
  handleSetExample,
  handleShowInfo,
  handleToggleRounding
}) {
  const { tooltip, caption, icon } = getRoundingProps(isRounded)
  return (
    <div className={styles.controls_wrapper}>
      <InstructionsOrError error={error} />
      <div className={styles.controls}>
        <Tooltip placement="top" text={tooltip}>
          <IconButton
            onClick={handleToggleRounding}
            type={icon}
            caption={caption}
          />
        </Tooltip>
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

function getRoundingProps(isRounded) {
  if (isRounded)
    return {
      tooltip: 'Display amounts as decimals',
      caption: 'fraction',
      icon: 'exact'
    }
  return {
    tooltip: 'Display amounts as rounded fractions',
    caption: 'decimal',
    icon: 'fraction'
  }
}
