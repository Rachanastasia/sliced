export const UNIT_DATA = {
  TEASPOON: { inMl: 4.92892, name: 'teaspoon', isScalable: true },
  TABLESPOON: { inMl: 14.7868, name: 'tablespoon', isScalable: true },
  OUNCE: { inMl: 29.5735, name: 'ounce', isScalable: true },
  CUP: { inMl: 236.588, name: 'cup', isScalable: true },
  PINT: { inMl: 473.176, name: 'pint', isScalable: true },
  QUART: { inMl: 946.353, name: 'quart', isScalable: true },
  GALLON: { inMl: 3785.41, name: 'gallon', isScalable: true },
  GRAM: { name: 'gram', isScalable: false },
  POUND: { name: 'pound', isScalable: false }
}

export const DECIMALS_TO_FRACTIONS = {
  5: '1/2',
  51: '1/2',
  49: '1/2',
  25: '1/4',
  26: '1/4',
  24: '1/4',
  74: '3/4',
  75: '3/4',
  76: '3/4',
  33: '1/3',
  32: '1/3',
  32: '1/3',
  66: '2/3',
  67: '2/3',
  65: '2/3',
  2: '1/5',
  21: '1/3',
  19: '1/3',
  3: '3/10',
  29: '3/10',
  31: '3/10',
  4: '2/5',
  41: '2/5',
  39: '2/5',
  8: '3/5',
  81: '3/5',
  79: '3/5',
  71: '7/10',
  7: '7/10',
  69: '7/10'
}

export const STARTING_INGREDIENT_OBJECT_DATA = [
  {
    amount: 0.5,
    ingredient: 'butter ',
    unit: { ml: 236.588, name: 'cup', isScalable: true }
  }
]

export const DEFAULT_DESCRIPTION = `With Sliced, you can half, quarter, or two and a half your recipes. Just copy one of your favorite recipes and paste it in the textbox. Use the slider to scale the ingredient amounts. It works by parsing your recipe's ingredients and splitting the ingredient name, amount, and unit.`

export const CONSTANT_OPTIONS = [
  {
    index: 0,
    value: 0.25,
    label: '1/4'
  },
  {
    index: 1,
    label: '1/3',
    value: 0.3333
  },
  {
    index: 2,
    value: 0.5,
    label: '1/2'
  },
  {
    index: 3,
    value: 0.6666,
    label: '2/3'
  },
  {
    index: 4,
    value: 0.75,
    label: '3/4'
  },
  {
    index: 5,
    value: 1,
    label: '1'
  },
  {
    index: 6,
    value: 1.75,
    label: '1 3/4'
  },
  {
    index: 7,
    value: 2.5,
    label: '2 1/2'
  },
  {
    index: 8,
    value: 3.5,
    label: '3 1/2'
  },
  {
    index: 9,
    value: 5,
    label: '5'
  },
  {
    index: 10,
    value: 8,
    label: '8'
  }
]
