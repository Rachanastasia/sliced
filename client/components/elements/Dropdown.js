import styles from '../../styles/modules/ButtonToInput.module.css'

export function Dropdown({ name, options, onChange }) {
  return (
    <select name={name} className={styles.dropdown_wrapper} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}
