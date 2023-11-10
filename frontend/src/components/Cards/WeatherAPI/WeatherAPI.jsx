import { useState } from "react";

const api = {
  key: "b68e3c8b3a181508b0ac48be82afd936",
  base: "https://api.openweathermap.org/data/2.5/",
};

function WeatherAPI() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="weatherAPI">
      <div>
        <input
          type="text"
          placeholder="Enter city/town..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="button" onClick={searchPressed}>
          Search
        </button>
      </div>

      {typeof weather.main !== "undefined" ? (
        <div>
          <p>{weather.name}</p>

          <p>{weather.main.temp}°C</p>

          <p>{weather.weather[0].main}</p>
          <p>({weather.weather[0].description})</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default WeatherAPI;
