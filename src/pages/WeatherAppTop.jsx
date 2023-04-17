import React from "react";

export const WeatherAppTop = (props) => {
  const { data } = props;
  return (
    <div className="top">
      <div className="location">
        <p>{data.name}</p>
      </div>
      <div className="temp">
        {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
      </div>
      <div className="description">
        {data.weather ? <p>{data.weather[0].main}</p> : null}
      </div>
    </div>
  );
};
