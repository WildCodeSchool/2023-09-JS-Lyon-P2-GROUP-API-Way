import { useApiWeatherContext } from "../components/contexts/ApiWeatherContext";

function SearchFonction() {
  const { searchPressed } = useApiWeatherContext;
  const { actions } = useApiWeatherContext;

  return (
    <div className="weatherAPI">
      <div className="containerSearch">
        <div className="search">
          <input
            type="text"
            placeholder="Enter city..."
            onChange={(e) => actions.setSearch(e.target.value)}
          />
          <button type="submit" onClick={searchPressed}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchFonction;
