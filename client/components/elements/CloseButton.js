import { IoIosClose } from 'react-icons/io'
import styles from '../../styles/modules/CloseButton.module.css'

export function CloseButton({ handleOnClose }) {
  return (
    <button onClick={handleOnClose} className={styles.button}>
      <IoIosClose />
    </button>
  )
}
