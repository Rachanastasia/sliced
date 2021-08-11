import {VULGAR_FRACTIONS, SPECIAL_CHARACTERS, RECIPES} from './utils/sampleRecipes'
import {transformInputIntoIngredientData} from '../utils/transformInputIntoIngredientData'

(function testParsingAllRecipes(){
    test('successfully parses all sample recipes', () => {
        RECIPES.map(recipe => testRecipe(recipe))
    }) 
})()

function testRecipe(recipe){
    test('parses recipe', () => {
        const parsedRecipe = transformInputIntoIngredientData(recipe)
        expect(parsedRecipe?.length).toBeTruthy()
    })
}



test('parses a recipe with vulgar fractions and returns the correct floating point number', () => {
    const parsedRecipe = transformInputIntoIngredientData(VULGAR_FRACTIONS)
    const testIngredient = parsedRecipe[0]

    expect(parsedRecipe?.length).toBeTruthy()
    expect(testIngredient?.amount).toBe(0.25)
})

test('strips invalid characters from recipe', () => {
    const parsedRecipe = transformInputIntoIngredientData(SPECIAL_CHARACTERS)
    const testIngredient = parsedRecipe[0]
    expect(parsedRecipe?.length).toBeTruthy()
    expect(testIngredient.ingredient).not.stringContaining('(')
})

