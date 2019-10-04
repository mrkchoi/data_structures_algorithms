import React from 'react';
import useFetchData from "./useFetchData";

function DataDisplay({query}) {
  const data = query === "" ? useFetchData('San Francisco') : useFetchData(query);
  if (!data) return <div>Loading...</div>;
  const formattedTemp = (parseFloat(data.main.temp) - 273.15) * 9/5 + 32;

  return (
    <div>
      <p>{data.name}</p>
      <p>Current Temp: {formattedTemp} F</p>
      <p>{data.weather[0].description}</p>
      <p>
        Long: {data.coord.lon}, Lat: {data.coord.lat}
      </p>
      <p>Wind speed: {data.wind.speed}</p>
    </div>
  );
}

export default DataDisplay;
