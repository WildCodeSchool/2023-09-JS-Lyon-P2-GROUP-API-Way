import { useApiWeatherContext } from "../../contexts/ApiWeatherContext";

function WeatherAPI() {
  const { setSearch, searchPressed } = useApiWeatherContext();

  return (
    <div className="App">
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
    </div>
  );
}

export default WeatherAPI;
