import React from "react";
import axios from "axios";

function App() {
  const url = process.env.REACT_WEATHER_APP_API_KEY;

  return (
    <div className="app">
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
            <h2>70°F</h2>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            <p>12 mph</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
