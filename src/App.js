/* eslint-disable object-curly-newline */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */

import React, { Component } from 'react';

import './App.css';

import Weather from './Weather';
import { convertToCelsius } from './Temperature';

/* This example illustrates a simple react project
 * that works with an external API.
 *
 * Take note of the comments they point common
 * problems you will need to solve with React.
 *
 * There are two ideas here
 * - Input/Controlled Component Pattern
 * - Conditionally Rendering components
 *
 * The project has an input field where a user will
 * input a zip code. It finds weather data for that
 * zip and displays it in a component. */

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '', // Used to hold value entered in the input field
      weatherData: null, // Used to hold data loaded from the weather API
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    // ! Get your own API key !
    const apikey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    // Get the zip from the input
    const zip = this.state.inputValue;
    // Form an API request URL with the apikey and zip
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apikey}`;
    // Get data from the API with fetch
    fetch(url).then(res => res.json() ).then((json) => {
      // If the request was successful assign the data to component state
      this.setState({ weatherData: json });
      // ! This needs better error checking here or at renderWeather()
      // It's possible to get a valid JSON response that is not weather
      // data, for example when a bad zip code entered.
    }).catch((err) => {
      // If there is no data
      this.setState({ weatherData: null }); // Clear the weather data we don't have any to display
      // Print an error to the console.
      console.log('-- Error fetching --');
      console.log(err.message);
      // You may want to display an error to the screen here.
    });
  }

  renderWeather() {
    // This method returns undefined or a JSX component
    console.log(this.state.weatherData);

    if (this.state.weatherData === null) {
      // If there is no data returned from the API
      return undefined;
    }

    if (this.state.weatherData.cod !== 200) {
      // if the ZIP code is invalid or other error, pass err message
      const errMessage = `${this.state.weatherData.message} - try another ZIP code`;
      return errMessage;
    }
    // Take the weather data apart to more easily populate the component
    const { main, description, icon } = this.state.weatherData.weather[0];
    const { temp, pressure, humidity, temp_min, temp_max } = this.state.weatherData.main;
    const city = this.state.weatherData.name;
    const { sunrise, sunset } = this.state.weatherData.sys;
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    // const sunriseTime = sunriseDate.toLocaleTimeString()
    console.log(sunriseTime);
    console.log(sunsetTime);

    return (
      <Weather
        city={city}
        main={main}
        description={description}
        icon={icon}
        temp={convertToCelsius(temp)}
        pressure={pressure}
        humidity={humidity}
        tempMin={convertToCelsius(temp_min)}
        tempMax={convertToCelsius(temp_max)}
      />
    );
  }

  render() {
    return (
      <div className="App">

        <h1>Weather.io</h1>

        {/** This input uses the controlled component pattern */}
        <form onSubmit={e => this.handleSubmit(e)}>

          {/**
          This pattern is used for input and other form elements
          Set the value of the input to a value held in component state
          Set the value held in component state when a change occurs at the input
          */}
          <input
            value={this.state.inputValue}
            onChange={e => this.setState({ inputValue: e.target.value })}
            type="text"
            pattern="(\d{5}([\-]\d{4})?)"
            placeholder="ZIP"
          />

          <button type="submit">Submit</button>

        </form>

        {/** Conditionally render this component */}
        <div id='results'>
          {this.renderWeather()}
        </div>

      </div>
    );
  }
}

export default App;
