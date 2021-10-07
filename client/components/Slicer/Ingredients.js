import React, { useState, useEffect } from "react";
import styles from "../../styles/modules/Slicer.module.css";
import { convertFloatToFraction } from "../../utils/displayAsFraction";
import { scaleIngredient } from "../../utils/scaleIngredient";
import { CONSTANT_OPTIONS } from "../../config/constants";
import ItemInput from "./ItemInput";
import AddButton from "./AddButton";
import UnitInput from "./UnitInput";

export default function Ingredients({ ingredients }) {
  const originalValues = CONSTANT_OPTIONS[5];
  const [constant, setConstant] = useState(originalValues);
  // Interact with node package of slicer algo
  // useEffect(() => {
  //   if (constant.index !== 5) setConstant(originalValues);
  // }, [ingredients]);

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
