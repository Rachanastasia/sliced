export const SET_TITLE = 'set title'
export const SET_INGREDIENTS = 'set ingredients'

export const UNIT_DATA = {
    TEASPOON: {ml:5, name: 'teaspoon', isScalable: true},
    TABLESPOON: {ml:15, name: 'tablespoon', isScalable: true},
    CUP: {ml:237, name: 'cup', isScalable: true},
    PINT: {ml:473, name: 'pint', isScalable: true},
    QUART: {ml:946, name: 'quart', isScalable: true},
    GALLON: {ml:3800, name: 'gallon', isScalable: true},
    OUNCE: {ml: 29.5735, name: 'ounce', isScalable: true},
    GRAM: {ml: 1, name: 'gram', isScalable: false},
    POUND: {ml: 1, name: 'pound', isScalable: false}
}

export const DECIMALS_TO_FRACTIONS = {
    "5": "1/2",
    "25": "1/4",
    "75": "3/4",
    "33": "1/3",
    "66": "2/3",
    "2": "1/5",
    "3": "3/10",
    "4": "2/5",
    "8": "3/5",
    "7": "7/10"
}

export const CONSTANT_OPTIONS = [
    {
        label: 'x 1/4',
        constant: 0.25,
    },
    {
        label: 'x 1/3',
        constant: 0.3333,
    },
    {
        label: 'x 1',
        constant: 1,
    },
    {
        label: 'x 1 1/2',
        constant: 1.5,
    },
    {
        label: 'x 3',
        constant: 3,
    }
]