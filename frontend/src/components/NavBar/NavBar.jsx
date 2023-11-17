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
        <a href="/accueil?ville=search">
          <img
            src="/src/assets/logo.png"
            alt="Logo Dhéliat Chronicle"
            className="logoApp"
          />
          <h2>Dhéliat Chronicle</h2>
        </a>
      </div>
      <div className="buttonSearchRight">
        <SearchButton /> {/* Utilisez le composant SearchButton à droite */}
      </div>
    </div>
  );
}

export default Navbar;
