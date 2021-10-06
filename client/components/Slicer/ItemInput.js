import styles from "../../styles/modules/Slicer.module.css";

export default function ItemInput({
  label,
  value,
  setValue,
  fullWidth = false,
}) {
  return (
    <fieldset className={styles.input_item}>
      <label>{label}</label>
      <input type="text" value={value} setValue={setValue} />
    </fieldset>
  );
}
