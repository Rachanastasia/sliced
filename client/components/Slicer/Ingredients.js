import React, { useState, useEffect } from "react";
import styles from "../../styles/modules/Slicer.module.css";
import { convertFloatToFraction } from "../../utils/displayAsFraction";
import ItemInput from "./ItemInput";
import AddButton from "./AddButton";
import UnitInput from "./UnitInput";

export default function Ingredients({ ingredients, isLoading }) {
  const [constant, setConstant] = useState(originalValues);
  // THIS IS WHERE THE REDUCER LIVES

  return (
    <ul className={styles.scaled_indgredients_with_slider}>
      {ingredients &&
        ingredients.map((ingredient, index) => (
          <Ingredient
            key={index}
            ingredient={ingredient}
            constant={constant.value}
          />
        ))}
    </ul>
  );
}

function Ingredient({ ingredient }) {
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
