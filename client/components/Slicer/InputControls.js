import Button from "../Button";

export default function InputControls({ handleClear, handleDemoRecipe }) {
  return (
    <div>
      <Button onClick={() => {}} text="paste" />
      <Button onClick={handleClear} text="clear" />
      <Button onClick={handleDemoRecipe} text="demo recipe" />
    </div>
  );
}
