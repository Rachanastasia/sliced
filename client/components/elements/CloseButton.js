import { IoIosClose } from 'react-icons/io'
import styles from '../../styles/modules/CloseButton.module.css'

export function CloseButton({ onClick }) {
  return (
    <button onClick={onClick} className={styles.button}>
      <IoIosClose />
    </button>
  )
}
