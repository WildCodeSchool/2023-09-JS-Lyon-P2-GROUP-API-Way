import React from "react";
import PropTypes from "prop-types";

function SearchButton({ onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Recherche
    </button>
  );
}

SearchButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SearchButton;
