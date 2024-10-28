// src/components/Forecast.js
import React from "react";

const Forecast = ({ data }) => {
  return (
    <div className="forecast">
      <h2>7-Day Forecast</h2>
      <div className="forecast-grid">
        {data.map((day, index) => (
          <div key={index} className="forecast-day">
            <p>Day {index + 1}</p>
            <p>Temp: {day.temp.day}°C</p>
            <p>Condition: {day.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
