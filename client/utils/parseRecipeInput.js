import types from './unitNameConversions.json';

//TODO: Split into multiple functions that are outside method. 

//make a factory function that returns object 
//add object to array
//have array for 

export function parseRecipeInput(input) {
  /*This function parses the input from the inputarea ingredient input onChange
  By splitting the numbers and valid types from the rest of the words
  with O(n) time complexity */

  let parsedIngredients = []
  let currentWordFromInput = ''
  
  let currentAmount = null
  let currentUnit = null
  let currentTitle = null

  const createIngredient = (amount = null, unit = null, ingredient_name) => ({ amount, unit, ingredient_name });



  for (let i = 0; i < input.length; i++) {
    //loops through string once
    if (input[i] === ' ' || input[i] === '\n') {
      findCurrentWordType(currentWordFromInput);
      currentWordFromInput = '';

      //if there is a next char
      //and it is a number or new line
      //and there is already an ingredeint name
      //add object to array
      if (input[i + 1]) {
        if (input[i + 1].match(/\d/) || input[i] === '\n') {
          if (ingredient_name) {
            const obj = createIngredient(amount, unit, ingredient_name);
            arr.push(obj);
            amount = null;
            unit = null;
            ingredient_name = null;
          }
        }
      }
    }
    else {
      currentWordFromInput += input[i];
    }
  }

  //is word 

  function findCurrentWordType(word){
    word = word.toLowerCase()
    const regex = /\d/
    if (word.match(regex)) {
      if (amount) {
        amount += ` ${word}`;
      }
      else {
        amount = word;
      }
    }
    else if (types[`${word}`]) {
      unit = types[word];
    }
    else {
      if (ingredient_name) {
        ingredient_name += ` ${word}`
      }
      else {
        ingredient_name = word;
      }
    }
  }

  if (ingredient_name) {
    const obj = createObject(amount, unit, ingredient_name);
    arr.push(obj);

  }

  return arr;
}


