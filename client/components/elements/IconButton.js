import { IoIosClose, IoIosLock, IoIosUnlock } from 'react-icons/io'
import styles from '../../styles/modules/CloseButton.module.css'

export function IconButton({ type, onClick, disabled = false }) {
  const types = {
    close: IoIosClose,
    lock: IoIosLock,
    unlock: IoIosUnlock
  }

  const Icon = types[type]
  return (
    <button onClick={onClick} className={styles.button} disabled={disabled}>
      <Icon />
    </button>
  )
}
