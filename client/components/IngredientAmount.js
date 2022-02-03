export function IngredientAmount({ text, ref, active, onClick, onBlur }) {
  return (
    <ButtonToInput
      text={text}
      ref={ref}
      active={active === 'amount'}
      onClick={handleActiveIngredientAmount}
      onBlur={handleChangeIngredientAmount}
    />
  )
}
