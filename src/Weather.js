import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-light w-100"
              />
            </div>
          </div>
        </form>
        <h1>New York</h1>
        <ul>
          <li>Thursday 12:29</li>
          <li>Mostly cloudy</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div cassName="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Mostly cloudy"
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">{Math.round(temperature)}</span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 0%</li>
              <li>Humidity: 43%</li>
              <li>Wind: 23 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5742t410357f5dbafof49f0503c19359";
    let city = "New York";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading";
  }
}
