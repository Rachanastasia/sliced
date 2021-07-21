

export const UNIT_DATA = {
    TEASPOON: {ml:4.92892, name: 'teaspoon', isScalable: true},
    TABLESPOON: {ml:14.7868, name: 'tablespoon', isScalable: true},
    OUNCE: {ml: 29.5735, name: 'ounce', isScalable: true},
    CUP: {ml:236.588, name: 'cup', isScalable: true},
    PINT: {ml:473.176, name: 'pint', isScalable: true},
    QUART: {ml:946.353, name: 'quart', isScalable: true},
    GALLON: {ml:3785.41, name: 'gallon', isScalable: true},
    GRAM: {name: 'gram', isScalable: false},
    POUND: {name: 'pound', isScalable: false}
}

export const DECIMALS_TO_FRACTIONS = {
    "5": "1/2",
    "25": "1/4",
    "26": "1/4",
    "24": "1/4",
    "74": "3/4",
    "75": "3/4",
    "76": "3/4",
    "33": "1/3",
    "32": "1/3",
    "32": "1/3",
    "66": "2/3",
    "67": "2/3",
    "65": "2/3",
    "2": "1/5",
    "21": "1/3",
    "19": "1/3",
    "3": "3/10",
    "29": "3/10",
    "31": "3/10",
    "4": "2/5",
    "41": "2/5",
    "39": "2/5",
    "8": "3/5",
    "81": "3/5",
    "79": "3/5",
    "71": "7/10",
    "7": "7/10",
    "69": "7/10"
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