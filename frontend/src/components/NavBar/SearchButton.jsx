import React from "react";
import Magnifyingred from "../../assets/Magnifyingred";

function SearchButton() {
  return (
    <div className="buttonnavbar">
      <button
        className="buttonSearchNavBar"
        onClick="window.location.href = '../../pages/SearchPage.jsx;"
        type="button"
      >
        <Magnifyingred />
      </button>{" "}
    </div>
  );
}

export default SearchButton;
