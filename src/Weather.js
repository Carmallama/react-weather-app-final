import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `https://ssl.gstatic.com/onebox/weather/64/cloudy.png`,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="search-form">
          <form>
            <div className="row">
              <div className="col-9">
                {" "}
                <input
                  type="search"
                  placeholder="🔎Search a city..."
                  className="
          form-control"
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
          <div className="col-md">
            <img src={weatherData.icon} alt={weatherData.description} />
          </div>
          <div className="col-md temperatures">
            <ul>
              <li className="currentTemperature">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="units">°C</span>
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
    const apiKey = "b6c769756646411c438f6a04abe73a94";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
