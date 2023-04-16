import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response);
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
      {/* Search Filter */}
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder="Enter location"
        />
      </div>

      <div className="container">
        {/* Top section */}
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        {/* Bottom section */}
        <div className="bottom">
          <div className="feels">
            {data.main ? (
              <h2 className="bold">{data.main.feels_like}°F</h2>
            ) : null}
            <p className="paragraph-font-size">Feels like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            <p className="paragraph-font-size">Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className="bold">{data.wind.speed} mph</p> : null}
            <p className="paragraph-font-size">Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
