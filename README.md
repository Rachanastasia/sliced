# Sliced

This is the repository for Sliced, the app to scale your recipes. 

With Sliced, a user can input the ingredients of their favorite recipes. Sliced parses the ingredients and allows you to scale the recipe up or down. Some units--including **cups**, **tablespoons**, **teaspoons**, and **gallons**--scale with the amount. The amounts are displayed in fractions when possible. All other numbers are rounded to the second decimal.

View the old [Sliced app](https://sliced.rachanastasia.vercel.app/) or the old [frontend](https://github.com/Rachanastasia/sliced-client) and [backend](https://github.com/Rachanastasia/sliced-API) code on GitHub. 

## Tech Stack

- React.js
- Next.js
- Jest
- CSS3

## Codebase

### Client

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

