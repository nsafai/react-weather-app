# React API Challenge 

This is a learning project in React, using an external API, in this case [OpenWeatherMap.org's Weather API](https://openweathermap.org). 

## Overview 

This project focusses on two concepts used in react: 

1. Form input and the controlled component pattern.
2. Conditionally rendering components. 

More about controlled components [here](https://reactjs.org/docs/forms.html).

## How to run locally

To run this example project you will need to make an account with [OpenWeatherMap](https://openweathermap.org) and generate an API key and set that key as an envoronment variable in this project. Follow these steps:

- Download or fork with project repo
- Create an account at [OpenWeatherMap.org](https://openweathermap.org)
- Go your profile and select API Keys. 
- Generate a key and copy the key to the clipboard
- Back in this project add the following to the end of .env file: 

`REACT_APP_OPENWEATHERMAP_API_KEY=<YOUR_OPENWEATHERMAP_API_KEY_HERE>`

From here you should be able to run the project and get weather data from Open Weather Map. 

- In your Terminal, `cd` to the project repo
- Run `npm install` 
- Run `npm start` to preview the project
- View the project in your browser at: [http://localhost:3000](http://localhost:3000)

### Challenges / Milestones

- [x] **Create a Weather Component:** Currently all of the work of loading and displaying the weather data is handled by  `App.js`. 
    - [x] Make a new component `Weather`. This component should load and display the weather data. 
    - [x] Import the Weather component into `App.js` 
    - [x] Display the new Weather component in `App.js`.
    - [x] You're done when all of the work of loading and displaying weather data is removed from App.js, and the Weather component does all the work.  

- [x] **Handling errors:**

    The current implementation has some holes. One big problem is an error when an invalid zip code is used. The problem occurs because the server returns an object that doesn't include properties the script is looking for. When an invalid zip code is supplied the JSON returned from the server looks like: `{cod: "404", message: "city not found"}`. Your script should look for: `cod:"404"`. When the weather data was fetched successfully you should get `code:"200"`. 

    - [x] Spot a successful response `code:200` and display the weather data when it does. 
    - [x] It should spot an error `code: 404` (or other) and handle this by displaying a message when this occurs. 
    - [ ] Stretch Goal: make a component that displays error messages. Render this component when there is an error, render the weather data when there is no error. 
    - [ ] Bonus: pass the error message into this component as a prop and  component should display the message. 

- [x] **Sub Components:** The Weather Component is a little monolithic. It does a little too much. In many cases it's better to have smaller components that handle specific tasks. Goal build components that display various elements of the weather data. 

    - [x] **Temperature component**. Create a component whose sole task is to display the temperature. You should pass the temperature into the component as a prop and the component should display it. 
    - [x] Bonus! The temperature is supplied in kelvin. Your Temperature component should be able to display the temperature as fahrenheit. The formula is: `300K × 9/5 - 459.67`. 
    - [ ] Stretch goal! Temperature component takes a parameter `isMetric` if this is true the component converts the temperature from Kelvin to Celsius.
    - [ ] **WeatherDescription** component. This component takes the values used for title and description and displays them. 
    - [ ] **Atmosphere** component. Create a another component that displays the air pressure and humidity. Call this component Atmosphere. It should take the values for pressure and humidity in as props and display them. 

    Note: The tasks above as you to build three new components. These should all be children of the Weather component you created in the first challenge. 

- [x] **Style the components**: Currently there a minimal set of styles. Your goal is to expand on these. Your goal is to add some styles to the components you have created. 

    - [ ] Bonus, create a css file for each component you create and import that set of styles into the component. 

- [ ] **Stretch Challenges** 

    - [ ] **Use the Browser API to get the Geo Location:** The OpenWeatherMap API has an option where you can supply Geo Location rather than the zip code to get weather data. 
    - [ ] **Display a 5 day forecast:** This project uses the current weather forecast. The OpenWeatherMap also provides a 5 day forcast. Your goal is to display this. 
    - [ ] Find another simple API and make a component to display data from your chosen API. 

- [ ] **Loading Screen**: During the loading process your app is limbo, you haven't gotten a success or an error yet. In this state your app should display a message letting us know that the app is in the loading process. 

    To do this use keep track of the status of the app and conditionally render a component to display the status of the app. 

- [ ] **Stretch Challenge, External API** Use an API of your choice. This can be any API you like. Render data from the API with React. Build components and sub-components to do the work and display your data. 

### Credits
This project was boot strapped with Create React App. See the notes [here](create-react-app-notes.md) for more information.

This project was largely guided by the parent repo it was forked from.