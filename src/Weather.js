import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="search-form">
        <form>
          <div className="row">
            <div className="col-9">
              {" "}
              <input
                type="search"
                placeholder="Search a city..."
                className="
          form-control"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="search" className="btn btn-primary" />
            </div>
          </div>
        </form>
      </div>
      <h1>London</h1>
      <h2>Sunday 6th November 11:42</h2>
      <div className="row current">
        <div className="col-md">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weather icon"
          />
        </div>
        <div className="col-md temperatures">
          <ul>
            <li>13°C</li>
            <li>Light Rain</li>
          </ul>
        </div>
        <div className="col-md weather-overview">
          <div>Weather overview:</div>
          <ul>
            <li>Feels like: 12°C</li>
            <li>Humidity: 79%</li>
            <li>Wind speed: 4 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
