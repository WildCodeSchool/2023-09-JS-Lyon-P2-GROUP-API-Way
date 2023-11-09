import "./pageerror.css";
import React from "react";
import { Link } from "react-router-dom";
import searchingFilesImage from "../assets/searchDate.jpg";
import arrowRightImage from "../assets/arrow-right-solid.svg"; // Utilisez l'instruction d'import pour l'image de la flèche
import Navbar from "../components/NavBar/NavBar";

function PageNoDate() {
  return (
    <div className="container">
      <h3>Dhéliat n’a pas trouvé de dates correspondantes</h3>
      <img
        src={searchingFilesImage}
        alt="Dhéliat cherche la page sur son pc mais elle est perdue dans les fichiers avec des pages qui volent"
        className="imgError"
      />
      <div className="selectDateRandom">
        <h4>
          <Link to="/nouvelle-page">Mais voici une date intéressante</Link>
        </h4>
        <img
          src={arrowRightImage} // Utilisez la variable que vous avez définie
          alt="flèche qui va vers la droite pour aller à la page suivante"
          className="nextArrow"
        />
      </div>
      <footer>
        {" "}
        <div className="footer-content">
          <Navbar />
        </div>
      </footer>{" "}
    </div>
  );
}

export default PageNoDate;
