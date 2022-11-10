import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState(`celcius`);
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  if (unit === `celcius`) {
    return (
      <div>
        <span className="temperature">{Math.round(props.celcius)}</span>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>{" "}
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;

    return (
      <div>
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="units">
          <a href="/" onClick={convertToCelcius}>
            °C
          </a>{" "}
          | °F{" "}
        </span>
      </div>
    );
  }
}
