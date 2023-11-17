import React from "react";
import { Link } from "react-router-dom"; // Importez Link depuis react-router-dom
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
        <Link to="/recherche" className="search-button">
          <Magnifyingred />
        </Link>
      </button>{" "}
    </div>
  );
}

export default SearchButton;
