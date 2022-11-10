import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "b6c769756646411c438f6a04abe73a94";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="search-form">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                {" "}
                <input
                  type="search"
                  placeholder="🔎Search a city..."
                  className="form-control"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="search"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </form>
        </div>
        <h1>{weatherData.city}</h1>
        <h2>
          <FormattedDate date={weatherData.date} />
        </h2>
        <div className="row current">
          <div className="col-md weatherIcon">
            <WeatherIcon
              code={weatherData.icon}
              alt={weatherData.description}
            />
          </div>
          <div className="col-md temperatures">
            <ul>
              <li className="currentTemperature">
                <WeatherTemperature celcius={weatherData.temperature} />
              </li>
              <li className="currentDescription text-capitalize">
                {weatherData.description}
              </li>
            </ul>
          </div>
          <div className="col-md weather-overview">
            <div>Weather overview |</div>
            <ul>
              <li>Feels like: 12°C</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind speed: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
