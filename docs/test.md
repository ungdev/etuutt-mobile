# Test

## Testing ?

- Testing is important, it assure you that when you modify something in the app it doesnt break the app somewhere else. It also assure a good code quality and good practice

## Commands

### yarn test

- Run all tests : lint, types and unit

### yarn test:lint

- Run lint test. This will test for defined eslint rules. All the rules are listed in .eslintrc.js. For example, it tests if you have ";" at the right place, or if you have the right spaces at the right place.

### yarn test:types

- Run type test. This will test for typescript type. All variables are typed, and this test that you code respect typing

### yarn test:unit

- Run unit test. This is the most interesting test. It will run through all the manually written tests (.test.js files). Those tests will do what you told them to do : check if a function returns the right value, if a componenent renders correctly etc.

## Go back to [README](../README.md)
