import { forwardRef, useRef, Fragment } from 'react'

import { IngredientLock } from './IngredientLock'
import { ButtonToInput, Dropdown, IconButton } from './elements'
import { formatDisplayAmount } from '../utils'

import styles from '../styles/modules/Recipe.module.css'

export const Ingredient = forwardRef(function IngredientItem(
  {
    ingredient,
    handleActiveIngredient,
    handleChangeIngredient,
    handleDeleteIngredient,
    handleLockedIngredient
  },
  ref
) {
  const amountRef = useRef('')
  const ingredientRef = useRef('')

  function handleActiveIngredientName() {
    handleActiveIngredient('ingredient')
  }

  function handleActiveIngredientAmount() {
    handleActiveIngredient('amount')
  }

  function handleChangeIngredientAmount() {
    const newAmount = amountRef.current.value
    // deactivate if empty string
    if (!Boolean(newAmount)) handleActiveIngredientAmount()
    else handleChangeIngredient('amount', newAmount)
  }

  function handleChangeIngredientName() {
    const newName = ingredientRef.current.value
    // deactivate if empty string
    if (!Boolean(newName)) handleActiveIngredientName()
    else handleChangeIngredient('ingredient', newName)
  }

  return (
    <li className={styles.ingredient}>
      <div className={styles.icon_wrapper}>
        <IconButton type="close" onClick={handleDeleteIngredient} />
      </div>
      <div className={styles.ingredient_content}>
        {ingredient.active === 'amount' ? (
          <ButtonToInput
            text={formatDisplayAmount(ingredient.amount.amount)}
            ref={amountRef}
            active={ingredient.active === 'amount'}
            onClick={handleActiveIngredientAmount}
            onBlur={handleChangeIngredientAmount}
          />
        ) : ingredient.active === 'ingredient' ? (
          <ButtonToInput
            text={ingredient.ingredient.name}
            ref={ingredientRef}
            active={ingredient.active === 'ingredient'}
            onClick={handleActiveIngredientName}
            onBlur={handleChangeIngredientName}
          />
        ) : (
          <Fragment>
            <ButtonToInput
              text={formatDisplayAmount(ingredient.amount.amount)}
              ref={amountRef}
              active={false}
              onClick={handleActiveIngredientAmount}
              onBlur={handleChangeIngredientAmount}
            />
            <Dropdown options={[ingredient?.unit?.name?.short]} />
            <ButtonToInput
              text={ingredient.ingredient.name}
              ref={ingredientRef}
              active={false}
              onClick={handleActiveIngredientName}
              onBlur={handleChangeIngredientName}
            />
          </Fragment>
        )}
      </div>
      <IngredientLock
        locked={ingredient.locked}
        onClick={handleLockedIngredient}
      />
    </li>
  )
})
