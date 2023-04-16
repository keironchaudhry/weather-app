import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response);
      });
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder="Enter location"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Malaga</p>
          </div>
          <div className="temp">
            <h1>65°F</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <h2 className="bold">70°F</h2>
            <p className="paragraph-font-size">Feels like</p>
          </div>
          <div className="humidity">
            <p className="bold">20%</p>
            <p className="paragraph-font-size">Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">12 mph</p>
            <p className="paragraph-font-size">Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
