import { IoIosClose, IoIosLock, IoIosUnlock } from 'react-icons/io'
import { MdContentPaste } from 'react-icons/md'

import styles from '../../styles/modules/CloseButton.module.css'

export function IconButton({ type, onClick, disabled = false }) {
  const types = {
    close: IoIosClose,
    lock: IoIosLock,
    unlock: IoIosUnlock,
    paste: MdContentPaste
  }

  const Icon = types[type]
  const className = `${styles.button} ${styles[`icon_${type}`]}`
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      <Icon />
    </button>
  )
}
