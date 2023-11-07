import React, { useState } from "react";

function WeatherAPI() {
  const city = "Lyon";
  const apiKey = "b68e3c8b3a181508b0ac48be82afd936";
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&appid=${apiKey}&units=metric`;

  const [weatherData, setWeatherData] = useState(null);

  const fetchData = () => {
    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        // Gestion des erreurs
        console.error(error);
      });
  };

  console.info(weatherData);
  return (
    <div>
      <button type="button" onClick={fetchData}>
        Obtenir les données{" "}
      </button>
    </div>
  );
}

export default WeatherAPI;
