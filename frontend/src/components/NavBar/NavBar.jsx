import React from "react";
import SearchButton from "./SearchButton";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <SearchButton className="buttonSearchLeft" />{" "}
      {/* Utilisez le composant SearchButton à gauche */}
      <div className="centerContent">
        <img
          src="/src/assets/logo2.png"
          alt="Logo Dhéliat Chronicle"
          className="logoApp"
        />
        <h1>Dhéliat Chronicle</h1>
      </div>
      <SearchButton className="buttonSearchRight" />{" "}
      {/* Utilisez le composant SearchButton à droite */}
    </div>
  );
}

export default Navbar;
