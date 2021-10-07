import React, { useState, useEffect } from "react";
import { transformInputIntoIngredientData } from "../../utils/transformInputIntoIngredientData";
import Ingredients from "./Ingredients";
import IngredientInput from "./IngredientInput";
import InputControls from "./InputControls";
import styles from "../../styles/modules/Slicer.module.css";
import { sample } from "../../utils/sampleRecipe";

function AddRecipe({ isPreview = true }) {
  const [ingredients, setIngredients] = useState({
    input: [],
    ingredientData: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const setIngredientInput = (input) => {
    const formattedInput = input + " ";
    const ingredientData = transformInputIntoIngredientData(formattedInput);
    setIngredients({ input, ingredientData });
  };

  const setSampleRecipe = () => setIngredientInput(sample);
  const clearRecipe = () => {
    setIngredients({ input: [], ingredientData: [] });
  };

  useEffect(() => {
    if (!ingredients.input?.length) setSampleRecipe();
  }, []);

  return (
    <section className={styles.slicer_wrapper} id="slicer">
      {isPreview && <h2 className={styles.preview_title}>Slice a Recipe</h2>}
      <div className={styles.input_button_wrapper}>
        <IngredientInput
          input={ingredients.input}
          setInput={setIngredientInput}
          isLoading={isLoading}
        />
        <InputControls
          handleDemoRecipe={setSampleRecipe}
          handleClear={clearRecipe}
          isLoading={isLoading}
        />
      </div>
      <Ingredients
        ingredients={ingredients.ingredientData}
        isLoading={isLoading}
      />
    </section>
  );
}

export default AddRecipe;
