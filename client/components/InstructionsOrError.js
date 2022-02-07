import styles from '../styles/modules/Controls.module.css'

export function InstructionsOrError({ error }) {
  const textStyle = error
    ? `${styles.error} ${styles.controls}`
    : `${styles.controls}`
  const text =
    error ?? 'Adjust the example or paste one of your favorite recipes'
  return (
    <div className={styles.controls_wrapper}>
      <span className={textStyle}>{text}</span>
    </div>
  )
}
