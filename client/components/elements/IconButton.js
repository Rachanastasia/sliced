import { IoIosClose, IoIosLock, IoIosUnlock } from 'react-icons/io'
import { MdContentPaste, MdInfoOutline } from 'react-icons/md'
import { GiKnifeFork } from 'react-icons/gi'
import { CgShapeHalfCircle, CgShapeCircle } from 'react-icons/cg'

import styles from '../../styles/modules/CloseButton.module.css'
import { forwardRef } from 'react'

export const IconButton = forwardRef(function IconButton(
  { type, onClick, caption, disabled = false },
  ref
) {
  const types = {
    close: IoIosClose,
    lock: IoIosLock,
    unlock: IoIosUnlock,
    paste: MdContentPaste,
    info: MdInfoOutline,
    example: GiKnifeFork,
    exact: CgShapeHalfCircle,
    fraction: CgShapeCircle
  }

  const Icon = types[type]
  const className = `${styles.button} ${styles.icon_button} ${
    styles[`icon_${type}`]
  } ${disabled ? styles.icon_button_disabled : ''} `
  return (
    <div className={styles.icon_button_wrapper} ref={ref}>
      <button onClick={onClick} className={className} disabled={disabled}>
        <Icon />
      </button>
      {caption && <span>{caption === true ? type : caption}</span>}
    </div>
  )
})
