import React from "react";

export const WeatherAppBottom = (props) => {
  const { data } = props;
  return (
    <div className="bottom">
      <div className="feels">
        {data.main ? (
          <h2 className="bold">{data.main.feels_like.toFixed()}°C</h2>
        ) : null}
        <p className="paragraph-font-size">Feels like</p>
      </div>
      <div className="humidity">
        {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
        <p className="paragraph-font-size">Humidity</p>
      </div>
      <div className="wind">
        {data.wind ? (
          <p className="bold">{data.wind.speed.toFixed()} mph</p>
        ) : null}
        <p className="paragraph-font-size">Wind Speed</p>
      </div>
    </div>
  );
};
