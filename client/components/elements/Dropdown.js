import styles from '../../styles/modules/ButtonToInput.module.css'

export function Dropdown({ unit }) {
  // This component should display a dropdown menu
  // It takes in options for a unit adjustment
  // For now, it just displays the unit

  return (
    <div className={styles.dropdown_wrapper}>
      <p>{unit?.name ?? 'NO UNIT'}</p>
    </div>
  )
}
