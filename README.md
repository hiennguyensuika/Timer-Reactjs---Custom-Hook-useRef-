# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

***************************************************************************
NOTE FOR ME

PRESENT THE APP - Timer

1. Demo-App Introduction ( 45s)
_ Timer UI
_ Title - Coder Timer
_ Display Timer - showing hour minute second 
_ 3 buttons: Stop Start Reset
_ Explain further for function of these 3 buttons (briefly)

2. Getting into Code to build this app
_ Cmd K 0 (zero) to sum up code
_ We have the function App inside we have a Custom Hook (userTimer)
_ Next, looking at the return , we have div Container which wraps 3 parts (1) Timer-Name, (2) Time Display, (3) Button Wrapper

3. Go Deeper in the Return 

Part 1: the name of Coder Timer  

Part 2: useTimer (elaborate the time first) (read this more in the project itself)
_ Going to “time” variable and elaborate other variables like isStart, active, refInterval
 
 Part 3: FormatTime (how it should be reshape and render to UI)

_ In this p tag - className time-box, it show result getHour/getMinute/getSecond
_formatTime is not a component but a function that is being imported from a file called formatTime.js. It is used to format the time value in a specific way before displaying it in the UI.
_ The time variable is a state variable obtained from the useTimer custom hook. It is used to store and manage the current time value.
_ The useTimer hook is a custom hook that returns an object with several properties and functions related to managing a timer like including time, as well as functions like startTimer, stopTimer, and resetTimer for controlling the timer.
_ Within the FormatTime we see the state variable time is put in and return with the value in getSecond getMinute getHour

Let elaborate this code - const getSeconds = `0${time % 60}`.slice(-2);
->% is for taking Quotient ( so chia het): quotient is 60, the remaining value is 5
-> 0 in front to make sure the value always have 2 digit, lets say here the second is 65, without 0 , the result is 5, but with 0 the result is 05 showing for Second display
->time here is the total current time value 
-> .slice (-2): getting the value backward from the string, make sure the value is always with 2 characters, so why we still need 0 in front, because 0 in front to make sure the value is always 2 digits (example - with 0 - 00 - 00 - 00 / without 0 it shows 0-0-0 and auto turns to 2 digits when it over 9 like 0-0-10) 
***Accordingly with getSecond, following likewise to understand the other codes for getMinutes and getHour

***P/S
_VSCode shortcut: example -click right button- formatTime()

_Go to definition (click right button): formatTime, it will go the function

_ Find All References: showing all files that includes formatTime

***************************************************************************

FLOW OF BUILDING LOGIC - TIMER
_ UI (figma) and App.js ( 3 part - title, time display, buttons)
_ how to setTime ( ini value =0), startTimer, stopTimer, resetTimer
_ Reshape the value into Hour Minute Second showing on UI 
