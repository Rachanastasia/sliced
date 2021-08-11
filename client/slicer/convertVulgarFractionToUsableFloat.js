/* vulgar fractions are fractions that are converted into special characters for readability, making their value inaccessable */

const VULGAR_FRACTIONS = {
    '¼': '0.25',
    '½': '0.5',
    '¾': '0.75',
    '⅓': '0.3333',
    '⅔': '0.6666',
    '⅕': '0.2',
    '⅖': '0.4',
    '⅗': '0.6',
    '⅘': '0.8',
    '⅙': '0.1666',
    '⅚': '0.8333',
    '⅛': '0.125',
    '⅜': '0.375',
    '⅝': '0.625',
    '⅞': '0.875',
    '⅐': '0.143',
    '⅑': '0.1111',
    '⅒': '0.1'
}

export function convertVulgerFractionToUsableFloat(character){
    const float = VULGAR_FRACTIONS[character]
    return !!float ? float : character
}


