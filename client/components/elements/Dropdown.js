import styles from '../../styles/modules/ButtonToInput.module.css'

export function Dropdown({ unit }) {
  return (
    <div className={styles.dropdown_wrapper}>
      <p>{unit?.name ?? 'NO UNIT'}</p>
    </div>
  )
}
