# [Sliced](https://sliced.vercel.app/)

This is the repository for [Sliced](https://sliced.vercel.app/), the app to scale your recipes.

With Sliced, users can scale up and down their favorite recipes. Sliced parses the ingredient text and allows the user to change the amount. To learn more about the algorithm sliced uses, view my [slicing algorithm](https://github.com/rachelrly/slicer).

For example, if Sally wants to make cookies. The recipe calls for 1/2 cup butter, but she only has 1/3 cup. Sally can copy and paste her recipe in Sliced, and the app will convert the text into a list of ingredients that can be scaled. To scale the recipe down, she can click on the amount of the butter ingredient list and enter the desired amount.

~

Sliced was recently updated. This is a repository for the newest iteration of Sliced. The [original version](https://github.com/rachelrly/sliced-client) is a fullstack app that allowed users to create accounts and save their recipes, created for Thinkful's Software Engineering Immersion program.

## Tech Stack

- React.js
- Next.js
- Jest
- CSS3

## Codebase (`/client`)

### /components

Contains components for Sliced

#### /elements

### /utils

Contains the functionality of the Slicer, along with other utilities

##### recipeReducer.js

Contains the reducer used in the `useReducer` in `/components/Recipe`

### /styles

Contains the styles for Sliced, written in CSS. Base styles are imported into `/pages/_app.js`
