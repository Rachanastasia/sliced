export default function Ingredient({ ingredient }) {
  const { unit, amount = null, title = null } = ingredient;
  //TODO: set up reducer in here
  //TODO: set up context for screen size
  //if locked, change in isolation
  //if not, change constant (ripple out)

  // isLocked

  /**
   * {
   * constant: number
   * unit: ENUM READ ONLY
   * amount: {
   * float: number
   * display: string
   * }
   * ingredient: string
   * isLocked: boolean
   * }
   */

  const formattedAmount = convertFloatToFraction(scaledIngredient.amount);
  return (
    <li className={styles.preview_ingredient}>
      {amount !== null ? (
        <ItemInput value={formattedAmount} />
      ) : (
        <AddButton onClick={handleAddAmount} />
      )}
      <UnitInput />
      {title !== null ? (
        <ItemInput value={ingredient.ingredient} />
      ) : (
        <AddButton onClick={handleAddIngredient} />
      )}
    </li>
  );
}
