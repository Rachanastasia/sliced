import { ParsedIngredient } from "./ingredient"
import {Units} from './units'


//loop through string

//returns array of 
//should this be a class? 
function parseRecipe(input: string) : ParsedIngredient[]{
    let parsedIngredients: ParsedIngredient[]
    let currentItem: string
    let temporaryIngredient: ParsedIngredient

    





    return []
}

export default parseRecipe

enum Types {
    Unit = 'UNIT',
    Ingredient = 'INGREDIENT',
    Amount = 'AMOUNT'
}


function validateItem(item: string): Types{
    //returns if that string is a unit, ingredient, or amount
    //is it a unit?
    //is it a digit?


    return Types.Unit
}

function isDigit(str: string): boolean {
    return !!str.match(/\d/)
}

function isUnit(str: string): boolean {

    return true
}


