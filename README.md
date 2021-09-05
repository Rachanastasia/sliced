# [Sliced](https://sliced.vercel.app/)

This is the repository for [Sliced](https://sliced.vercel.app/), the app to scale your recipes. 

Sliced was recently updated. This is a repository for the newest version. The [previous version](https://github.com/rachelrly/sliced-client) is a full stack app that allowed users to create accounts and save their recipes. To focus on what Sliced most special and make the tool accessable to users without an account, this iteration is currently a static site. 

View the old [Sliced app](https://sliced.rachanastasia.vercel.app/) or the old [frontend](https://github.com/rachelrly/sliced-client) and [backend](https://github.com/rachelrly/sliced-API) code on GitHub. 

With Sliced, users can scale up and down their favorite recipes. Sliced parses the ingredients and allows the user to select the multiple of the ingredients. Some units--including *cups*, *tablespoons*, *teaspoons*, and *gallons*--scale with the amount. Amounts are displayed in fractions when possible. All other numbers are rounded to the second decimal.



## Tech Stack

- React.js
- Next.js
- Jest
- CSS3

## Images

![](/client/public/main-page.jpg)
![](/client/public/scale-up.jpg)
![](/client/public/scale-down.jpg)

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

Contains the styles for Sliced, written in CSS. Base styles are imported into `/pages/_app.js`

##### main.css

Contains base styles for the viewport, the elements, and the psuedoselectors for the range slider

##### variables.old.css

**Depreciated**
Contains the variables from the last iteration of Sliced. Only legacy styles use these variables

##### variables.css

Contains the current variables used in Sliced 0.3.0, including flexible padding that increases with the viewport size

##### form.css

Contains base element styles for form-specific elements

##### modules/

Includes modules for five different components and the assets included in the CSS such as `Banner.module.css` and `Slicer.module.css`

#### __tests__/

Contains unit tests for the functionality of the Slicer, written with Jest

