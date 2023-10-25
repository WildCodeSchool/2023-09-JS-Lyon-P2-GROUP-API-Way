import React from "react";
import PropTypes from "prop-types";

function Navbar({ handleSearchClick }) {
  return (
    <div className="navbar">
      <img src="/src/assets/logo2.png" alt="Logo Dhéliat Chronicle" />
      <h1>Dhéliat Chronicle</h1>
      <button type="button" onClick={handleSearchClick}>
        Recherche
      </button>
    </div>
  );
}

Navbar.propTypes = {
  handleSearchClick: PropTypes.func.isRequired,
};

export default Navbar;
