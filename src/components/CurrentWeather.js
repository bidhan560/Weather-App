// src/components/CurrentWeather.js
import React from "react";
import "./CurrentWeather.css"; 

const CurrentWeather = ({ data }) => {
  if (!data || !data.main || !data.weather) {
    return <p>Loading weather data...</p>;
  }

  return (
    <div className="current-weather">
      <h2>Current Weather in {data.name}</h2>
      <p className="temperature">Temperature: {data.main.temp}°C</p>
      <p className="condition">Condition: {data.weather[0].description}</p>
      <p className="humidity">Humidity: {data.main.humidity}%</p>
      <p className="wind-speed">Wind Speed: {data.wind.speed} m/s</p>

      {/* Debugging: Display raw JSON data if needed */}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
};

export default CurrentWeather;
