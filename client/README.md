# [Sliced Client](https://sliced-rachanastasia.vercel.app/)

## Codebase

#### components/

Contains components for Sliced

##### Slicer/

Contains the components for the Slicer, including the text box, preview, and buttons. The main component is the default export in `index.js`

#### utils/

Contains the functionality of the Slicer, along with other utilities

##### transformInputIntoIngredientData.js

Parses the data from the user input, splitting the amount from the unit from the ingredient's name. This function returns an object with the data needed to scale the ingredient.

##### displayAsFraction.js

Converst the floating point number into a fraction by comparing the values of the last two digits with a dictionary of common fractions located in `/config/constants.js`

##### scaleIngredient.js

Scales the ingredient using the data object returned from `transformInputIntoIngredientData.js` and the selected constant

#### styles/

Contains the styles for Sliced, written in CSS. Some base styles are imported into `/pages/_app.js`, but most use CSS modules

#### __tests__/

Contains unit tests for the functionality of the Slicer, written with Jest



## Testing

Sliced uses Jest for unit testing the functionality of the Slicer. Run the tests with `npm run test`.

To allow ES6 module imports in testing, run `npm install --save-dev babel-jest @babel/core @babel/preset-env` before `npm test`.

Make a file called `babel.config.js` in this directory with the folloring content: 
`module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};`
