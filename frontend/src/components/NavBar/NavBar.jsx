import React from "react";
import PropTypes from "prop-types";
import SearchButton from "./SearchButton"; // Importez le composant SearchButton

function Navbar({ handleSearchClick }) {
  return (
    <div className="navbar">
      <SearchButton onClick={handleSearchClick} />{" "}
      {/* Utilisez le composant SearchButton à gauche */}
      <div className="center-content">
        <img src="/src/assets/logo2.png" alt="Logo Dhéliat Chronicle" />
        <h1>Dhéliat Chronicle</h1>
      </div>
      <SearchButton onClick={handleSearchClick} />{" "}
      {/* Utilisez le composant SearchButton à droite */}
    </div>
  );
}

Navbar.propTypes = {
  handleSearchClick: PropTypes.func.isRequired,
};

export default Navbar;
