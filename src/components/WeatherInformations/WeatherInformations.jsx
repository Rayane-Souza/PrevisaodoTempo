import React from "react";
import './Weatherinformations.css'; 

function WeatherInformations({ weather }) {
  if (!weather || !weather.weather || !weather.weather[0]) {
    return;
  }

  const iconCode = weather.weather[0].icon;

  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

  return (
    <div className="weather-container">
      <h2>{weather.name}</h2>
      <div className="weather-info">
        <img
          src={iconUrl}
          alt={`Ícone do clima para ${weather.name}`}
          width="100"
        />
        <p className="temperature">{Math.round(weather.main.temp)}ºC</p>
      </div>
      <p className="description">{weather.weather[0].description}</p>
      <div className="details">
        <p>Sensação térmica: {Math.round(weather.main.feels_like)}ºC</p>
        <p>Unidade: {weather.main.humidity}%</p>
        <p>Pressão: {weather.main.pressure}</p>
      </div>
    </div>
  );
}

export default WeatherInformations;
