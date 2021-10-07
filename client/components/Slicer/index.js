import React, { useState, useEffect } from "react";
import { transformInputIntoIngredientData } from "../../utils/transformInputIntoIngredientData";
import Ingredients from "./Ingredients";
import RecipeInput from "./RecipeInput";
import InputControls from "./InputControls";
import styles from "../../styles/modules/Slicer.module.css";
import { sample } from "../../utils/sampleRecipe";

function AddRecipe({ isPreview = true }) {
  const [recipeInput, setRecipeInput] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const setSampleRecipe = () => setRecipeInput(sample);
  const clearRecipe = () => setRecipeInput([]);

  return (
    <section className={styles.slicer_wrapper} id="slicer">
      {isPreview && <h2 className={styles.preview_title}>Slice a Recipe</h2>}
      <div className={styles.input_button_wrapper}>
        <RecipeInput
          input={recipeInput}
          setInput={setRecipeInput}
          isLoading={isLoading}
        />
        <InputControls
          handleDemoRecipe={setSampleRecipe}
          handleClear={clearRecipe}
          isLoading={isLoading}
        />
      </div>
      {recipeInput.length && (
        <Ingredients ingredients={recipeInput} isLoading={isLoading} />
      )}
    </section>
  );
}

export default AddRecipe;
