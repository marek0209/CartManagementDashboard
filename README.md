[![Netlify Status](https://api.netlify.com/api/v1/badges/04c1b1cc-a7bd-4e22-b4a2-ee1204502f2d/deploy-status)](https://app.netlify.com/sites/cart-mangement-dashboard/deploys)

# Cart Management Dashboard

## Demo

Live demo [https://cart-mangement-dashboard.netlify.app/](https://cart-mangement-dashboard.netlify.app/)


## Installation with docker (Recommended)
1. Clone or download the repo
2. Open project folder in terminal
3. Run in your terminal command   `docker-compose build dev` 
if your are at linux like os you probably need to type "sudo" before
4. If the building was successfully completed you can run `docker-compose up dev`
5. Congratulations, probably if everything went ok, you should be able to run in your browser http://localhost:3003/

To run test via docker you can type:

 `docker-compose run test`

## Installation without docker

1. Clone or download the repo
3. Open project folder in terminal
4. Make sure you have node v18.4 or newer installed, type this command:  `npm install`
5. Once the installation is done, you can run the project: `npm start`
9. Open http://localhost:3003/ to view in the browser.






## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
