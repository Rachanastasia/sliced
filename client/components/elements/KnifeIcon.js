import { RiKnifeLine } from 'react-icons/ri'
import styles from '../../styles/modules/Header.module.css'

export default function KnifeIcon() {
  return (
    <span className={styles.knife_wrapper}>
      <RiKnifeLine className={styles.knife} />
    </span>
  )
}
