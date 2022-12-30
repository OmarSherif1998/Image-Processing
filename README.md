# Resize Image API

## Description

This API functions as a image resizing tool using `sharp`

## Endpoints:

1. 'Resize' : url/api?filename&width&height
   
   Example for hitting endpoint using provided images : `http://localhost:3000/api?filename=fjord&height=300&width=300`

## Setup

### Installation

1. clone this repo.
2. `cd` to root dir of project.
3. run `npm install` to install project dependancies.

### Running the project

1. run `npm run start:build`, this will build the project to javascript and run the `index.js` file.
2. go to you browser and hit the resize endpoint.
3. You will see the rezied image.

### Additional functionality

1. Format: run `npm run prettier` to format project code using prettier. You can adjust `.prettierrc.json` file for personalized configuration according to [prettier docs](https://prettier.io/docs/en/configuration.html).
2. Linting: run `npm run lint` to lint the project code. You can edit `.eslinrrc.js` See: [ESLint Documentation](https://eslint.org/docs/latest/user-guide/configuring/).

## Project Dependancies:

1. Typescript
2. Sharp
3. Nodemon
4. Prettier
5. ESLInt
6. Jasmine
7. Supertest
8. nodemon
9. filesystem
10. copyfiles
11. express

