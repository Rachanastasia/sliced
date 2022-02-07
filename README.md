# [Sliced](https://sliced.vercel.app/)

Welcome to Sliced, an app to parse and manipulate recipes.

This repo contains the Sliced web app. The TypeScript algorithm used to parse and manipulate recipe data resides in [its own repo](https://github.com/rachelrly/slicer).

## User Story

> For example, Sally wants to make cookies. The recipe calls for 1/2 cup butter, but she only has 1/3 cup. Sally can copy and paste her recipe in Sliced, and the app will convert the text into a list of ingredients that can be scaled. Before scaling, Sally knows she doesn't want to scale down the amount of chocolate chips, so she presses the lock icon on the right to `unlock` and preserve the current amount. Then she clicks on "1/2" on the butter ingredient and enters "1/3". This will scale the entire recipe to the new:original ratio. After scaling, she wants to increase the amount of vanilla extract, so she unlocks the ingredient and changes the amount without effecting the ratio of rest of the recipe.

## Tech Stack

- React
- Next.js
- Jest
- CSS3 Modules

## Codebase

The Sliced codebase resides in the `/client` folder even though there is no backend because the original version had a Node/Express/Postgres api that allowed user creation and recipe persistence. This was dropped to give more attention to the [Slicer algorithm](https://github.com/rachelrly/slicer) and user interactions.

View the original [client](https://github.com/rachelrly/sliced-client) and [server](https://github.com/rachelrly/sliced-api), created in 2020 for Thinkful's Software Engineering Immersion program.

### /components

Contains components specifically made for the Sliced UI. All components are imported into `Recipe.js`, which is displayed in `pages/index.js`.

#### /elements

Contains all reusable UI elements that are not specifically tied to the Sliced UI

##### /[ButtonToInput.js](/client/components/elements/ButtonToInput.js) 👀

A button component that turns into an input component onClick

### /utils

Contains the functionality of the Slicer, along with other utilities

##### /[recipeReducer.js](/client/utils/recipeReducer.js) 👀

The reducer used to interact with the Sliced UI and the Slicer algorithm

### /styles

Contains the base styles, imported into `/pages/_app.js`

#### /modules

Contains CSS modules, named after the highest-level component that uses them
