import React, {useState, useEffect} from 'react'
import {getUnitFromString, getUnitAndAmountFromMlAmount} from '../utils/units.js'

/*Scales and formats units and amounts for recipe page, returning object with keys unit and num  */

//{num, unit}, constant
//make this state somewhere else? 
//there should be some objective measurement for everything

//this shouldn't scale from the beginning, it should take in current


export function useScaledIngredient({amount, unit}, constant=1) {
 
    const [ingredient, setIngredient] = useState({})

    //startingUnit * ml * constant

useEffect(()=> {
    const currentAmountInMl = ingredient?.amount?.number * ingredient?.unit?.ml
    console.log('CURRENT AMOUNT', ingredient?.unit?.ml, ingredient?.amount?.number)
    const currentIngredient =  getUnitAndAmountFromMlAmount(currentAmountInMl * constant)
    console.log('THIS IS THE CURRENT INGREDIENT', currentIngredient)
    
    if (currentIngredient !== ingredient) setIngredient(currentIngredient)   
},[constant, startingAmount, startingUnit])

return ingredient



    //convert into objective measure ml
    //switch statement based on unit and starting amount 

//get unit from util
//store {amount: {number, fraction}, unit: {ml, name}}

//multiply changes
//amount decimal and amount fraction are different and amount ml
//number * ml

//switch statement for ml, get amounts from unit, set new ingredient














    // useEffect(()=>{
    //     //run function that multiplies and checks 
    // },[multiply])
    /**
     returns this
        {
            amount: {number, fraction, ml}
        }



     * 
     * }
     * }
     */
    //switch statement
    //class teaspoon

    //effect to set unit class on multiply/constant change
    //change switch statement


    //class tablespoon
    //class cup
    //switch class based on 
    // let newAmount = num * multiply
    // let newUnit = unit

    // if (unit === 'cup' && newAmount < 0.25 && newAmount !== 0) {
    //     newAmount = newAmount * 16;
    //     newUnit = 'tbsp'
    // }

    // if (unit === 'tbsp' && newAmount < 0.5 && newAmount !== 0) {
    //     newAmount = 1.5;
    //     newUnit = 'tsp'
    // }

    // if (unit === 'tsp' && Number(newAmount.toString()[0]) >= 3) {
    //     newAmount = newAmount / 3;
    //     newUnit = 'tbsp'
    // }

    // let formatNum = ''

    // const getMixedNumber = (num, frac) => {
    //     const arr = num.toString().split('')
    //     return arr[0] == 0 ? `${frac}` : `${arr[0]} ${frac}`;
    // }

    // newAmount === 0.5
    //     ? formatNum = '1/2'
    //     : newAmount === 0.25
    //         ? formatNum = '1/4'
    //         : newAmount === 0.75
    //             ? formatNum = '3/4'
    //             : newAmount.toString().length === 3 && newAmount % 0.5 === 0
    //                 ? formatNum = getMixedNumber(newAmount, '1/2')
    //                 : newAmount % 0.25 === 0 && Number(`${newAmount.toString()[2]}${newAmount.toString()[3]}`) === 25
    //                     ? formatNum = getMixedNumber(newAmount, '1/4')
    //                     : newAmount % 0.25 === 0 && Number(`${newAmount.toString()[2]}${newAmount.toString()[3]}`) === 75
    //                         ? formatNum = getMixedNumber(newAmount, '3/4')
    //                         : Number(`${newAmount.toString()[2]}${newAmount.toString()[3]}`) === 37
    //                             ? formatNum = getMixedNumber(newAmount, '3/8')
    //                             : Number(`${newAmount.toString()[2]}${newAmount.toString()[3]}`) === 62
    //                                 ? formatNum = getMixedNumber(newAmount, '5/8')
    //                                 : Number(`${newAmount.toString()[2]}${newAmount.toString()[3]}`) === 12
    //                                     ? formatNum = getMixedNumber(newAmount, '1/8')
    //                                     : Number(`${newAmount.toString()[2]}${newAmount.toString()[3]}`) === 87
    //                                         ? formatNum = getMixedNumber(newAmount, '7/8')
    //                                         : Number(`${newAmount.toString()[2]}${newAmount.toString()[3]}`) === 33
    //                                             ? formatNum = getMixedNumber(newAmount, '1/3')
    //                                             : Number(`${newAmount.toString()[2]}${newAmount.toString()[3]}`) === 66
    //                                                 ? formatNum = getMixedNumber(newAmount, '2/3')
    //                                                 : formatNum = newAmount.toString().length > 5 ? Number(newAmount.toString().slice(0, 5)) : newAmount;


    // return { num: formatNum, unit: newUnit };

}





// takes in the block of text input
//parses for words and categorizes words
    //is  it a number?
    //is it a special ingredient term? 
    //is it an ingredient title?

    // MAKE INGREDIENT OBJECT
    //UNIT.isScalable
    // number in number object
        // CONTROLS INGREDIENT OBJECT WITH AMOUNT
        // nullable
        // float
        // ml (if applicable)
        // is this denormalized instance good?
    // make ingredient object
        //  title
        // attributes (what are the adjectives?)
    
    // return an array and display the result
    
    // pass this array to a scaling function
    //HOW DOES THE SCALING FUNCTION WORK?
        //divides the amount in ml by the units