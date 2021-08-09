import {stringToUnit} from './stringToUnit'

export class Ingredient{
    constructor(unit, amount, ingredientName, ingredientDescriptors){
        this.unit = unit
        this.amount = amount
        this.ingredientName = ingredientName
        this.ingredientDescriptors = ingredientDescriptors
    }

    setAmount(){

    }

    setUnit(){

    }

    setIngredientName(){

    }

    processIngredient(){
        return {
            unit: this.unit,
            amount: this.amount,
            ingredient: this.ingredientName
        }
    }
}

class Amount {
    constructor(integer, float, numerator, denominator){
        this.integer = integer
        this.float = float
        this.numerator = numerator
        this.denominator = denominator
    }


}