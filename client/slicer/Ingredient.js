import {stringToUnit} from './stringToUnit'
import {Amount} from './Amount'

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

