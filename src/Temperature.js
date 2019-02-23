/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

export const convertToCelsius = (kelvintemp) => {
  const exactCelsius = (kelvintemp - 273.15);
  const celsius = Math.floor(exactCelsius);
  return celsius;
};

const Temperature = ({ temp }) => (
  <p className="temperature no-margin">{temp}°C</p>
);

export default Temperature;
