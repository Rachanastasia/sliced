interface Unit {
    inMl?: number
    name: string
    isScalable: boolean
}

const Teaspoon: Unit = {inMl:4.92892, name: 'teaspoon', isScalable: true}
const Tablespoon: Unit = {inMl:14.7868, name: 'tablespoon', isScalable: true}
const Ounce: Unit = {inMl: 29.5735, name: 'ounce', isScalable: true}
const Cup: Unit = {inMl:236.588, name: 'cup', isScalable: true}
const Pint: Unit = {inMl:473.176, name: 'pint', isScalable: true}
const Quart: Unit = {inMl:946.353, name: 'quart', isScalable: true}
const Gallon: Unit = {inMl:3785.41, name: 'gallon', isScalable: true}
const Gram: Unit = {name: 'gram', isScalable: false}
const Pound: Unit = {name: 'pound', isScalable: false}



interface Ingredient {
    name: string
}


export interface ParsedIngredient {
    unit?: Unit
    amount?: number
    ingredient?: Ingredient
}