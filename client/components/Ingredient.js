import { useRef, Fragment } from 'react'
import { MAX_WORD_LENGTH } from 'recipe-slicer'

import { IngredientLock } from './IngredientLock'
import { ButtonToInput, Dropdown, IconButton, Tooltip } from './elements'

import styles from '../styles/modules/Recipe.module.css'

export function Ingredient({
  ingredient,
  lockSingleton,
  closeSingleton,
  showFractions,
  handleActiveIngredient,
  handleChangeIngredient,
  handleDeleteIngredient,
  handleLockedIngredient
}) {
  const amount = ingredient?.displayAmount(showFractions)
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
        <Tooltip
          singleton={closeSingleton}
          text="Remove ingredient"
          placement="left"
        >
          <IconButton type="close" onClick={handleDeleteIngredient} />
        </Tooltip>
      </div>
      <div className={styles.ingredient_content}>
        {ingredient.active === 'amount' ? (
          <ButtonToInput
            text={amount}
            ref={amountRef}
            active={ingredient.active === 'amount'}
            onClick={handleActiveIngredientAmount}
            onBlur={handleChangeIngredientAmount}
            maxLength={MAX_WORD_LENGTH}
          />
        ) : ingredient.active === 'ingredient' ? (
          <ButtonToInput
            text={ingredient.name}
            ref={ingredientRef}
            active={ingredient.active === 'ingredient'}
            onClick={handleActiveIngredientName}
            onBlur={handleChangeIngredientName}
            maxLength={MAX_WORD_LENGTH}
          />
        ) : (
          <Fragment>
            <ButtonToInput
              text={amount}
              ref={amountRef}
              active={false}
              onClick={handleActiveIngredientAmount}
              onBlur={handleChangeIngredientAmount}
              maxLength={MAX_WORD_LENGTH}
            />
            <Dropdown
              options={[
                ingredient?.unit?.name?.short ?? ingredient?.unit?.name?.long
              ]}
            />
            <ButtonToInput
              text={ingredient.name}
              ref={ingredientRef}
              active={false}
              onClick={handleActiveIngredientName}
              onBlur={handleChangeIngredientName}
              maxLength={MAX_WORD_LENGTH}
            />
          </Fragment>
        )}
      </div>
      <Tooltip
        singleton={lockSingleton}
        text="Unlock from scaling"
        placement="right"
      >
        <IngredientLock
          locked={ingredient.locked}
          onClick={handleLockedIngredient}
        />
      </Tooltip>
    </li>
  )
}
