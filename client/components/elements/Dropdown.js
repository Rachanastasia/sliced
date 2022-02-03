import styles from '../../styles/modules/ButtonToInput.module.css'

export function Dropdown({ unit }) {
  const hasUnit = Boolean(unit?.name)

  return (
    <div className={styles.dropdown_wrapper}>
      <p>{unit?.name ?? ''}</p>
    </div>
  )
}
