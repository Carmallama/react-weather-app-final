import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast() {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "25fad9f7e87157d33dde0f82ab269ee8";
  let latitude = "40.7";
  let longitude = "74";
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col ">
          <div>Sunday</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperatures-min">10°</span> |{" "}
            <span className="WeatherForecast-temperatures-max">
              <strong>16°</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
