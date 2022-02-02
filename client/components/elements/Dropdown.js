export function Dropdown({ unit }) {
  // This component should display a dropdown menu
  // It takes in options for a unit adjustment
  // For now, it just displays the unit

  return <p>{unit?.name ?? 'NO UNIT'}</p>
}
