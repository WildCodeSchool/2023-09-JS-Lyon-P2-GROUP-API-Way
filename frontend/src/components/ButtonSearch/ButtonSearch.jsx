import React from "react";
import { Link } from "react-router-dom";

function ButtonSearch() {
  return (
    <Link to="/search" className="search-button">
      Recherche
    </Link>
  );
}

export default ButtonSearch;
