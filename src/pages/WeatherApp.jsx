import React, { useState } from "react";
import axios from "axios";
import { WeatherAppTop } from "./WeatherAppTop";
import { WeatherAppBottom } from "./WeatherAppBottom";

export default function WeatherApp() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

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
        <WeatherAppTop data={data} />

        {/* Bottom section */}
        {data.name !== undefined && (
          <WeatherAppBottom data={data} />
        )}
      </div>
    </div>
  );
}
