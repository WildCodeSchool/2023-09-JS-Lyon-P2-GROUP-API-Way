import Magnifyingred from "../../assets/Magnifyingred";
import { useApiWeatherContext } from "../contexts/ApiWeatherContext";

function SearchButton() {
  const { handleOpenSearch } = useApiWeatherContext();

  return (
    <div>
      <button
        className="buttonSearchNavBar"
        type="button"
        aria-label="Lien vers la page recherche"
        onClick={handleOpenSearch}
      >
        <Magnifyingred />
      </button>
    </div>
  );
}

export default SearchButton;
