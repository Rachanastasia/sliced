# Client

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
