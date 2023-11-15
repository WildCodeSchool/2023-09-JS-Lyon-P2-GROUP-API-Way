import { useApiWeatherContext } from "../components/contexts/ApiWeatherContext";

function SearchFonction() {
  const { searchPressed, setSearch } = useApiWeatherContext();

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
    </div>
  );
}

export default SearchFonction;
