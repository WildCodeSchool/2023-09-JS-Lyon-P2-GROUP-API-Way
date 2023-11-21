import { useApiWeatherContext } from "../components/contexts/ApiWeatherContext";
import "./search.css";

function SearchFonction() {
  const { searchPressed, setSearch, setOpenSearchBar } = useApiWeatherContext();

  const handleResearch = () => {
    searchPressed();
    setOpenSearchBar(false);
  };

  return (
    <div>
      <input
        className="search-bar"
        type="text"
        placeholder="Enter city/town..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="search-btn" type="button" onClick={handleResearch}>
        Search
      </button>
    </div>
  );
}

export default SearchFonction;
