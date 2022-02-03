import { Button, IconButton } from './elements'

export function RecipeOptions({ handleClipboardPaste, handleSampleRecipe }) {
  // function to paste passed  here
  return (
    <div>
      <Button onClick={handleSampleRecipe} />
      <IconButton onClick={handleClipboardPaste} type="paste" />
    </div>
  )
}
