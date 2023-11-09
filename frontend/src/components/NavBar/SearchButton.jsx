import React from "react";
import { Link } from "react-router-dom"; // Importez Link depuis react-router-dom
import Magnifyingred from "../../assets/Magnifyingred";

function SearchButton() {
  return (
    <div>
      <button
        className="buttonSearchNavBar"
        type="button"
        aria-label="Lien vers la page recherche"
      >
        <Link to="/recherche" className="search-button">
          <Magnifyingred />
        </Link>
      </button>{" "}
    </div>
  );
}

export default SearchButton;
