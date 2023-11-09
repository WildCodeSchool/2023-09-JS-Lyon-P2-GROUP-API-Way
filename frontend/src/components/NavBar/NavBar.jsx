import React from "react";
import SearchButton from "./SearchButton";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="buttonSearchLeft">
        <SearchButton /> {/* Utilisez le composant SearchButton à gauche */}
      </div>
      <div className="centerContent">
        <img
          src="/src/assets/logo2.png"
          alt="Logo Dhéliat Chronicle"
          className="logoApp"
        />
        <h1>Dhéliat Chronicle</h1>
      </div>
      <div className="buttonSearchRight">
        <SearchButton /> {/* Utilisez le composant SearchButton à droite */}
      </div>
    </div>
  );
}

export default Navbar;
