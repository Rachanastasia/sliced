import React, { useState, useReducer } from "react";
import Ingredient from "./Ingredient";
import styles from "../../styles/modules/Slicer.module.css";

export default function Ingredients({ ingredients, isLoading }) {
  const [constant, setConstant] = useState(originalValues);
  // THIS IS WHERE THE REDUCER LIVES
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

  return (
    <ul className={styles.scaled_indgredients_with_slider}>
      {ingredients.map((ingredient, index) => (
        <Ingredient
          key={index}
          ingredient={ingredient}
          constant={constant.value}
        />
      ))}
    </ul>
  );
}
