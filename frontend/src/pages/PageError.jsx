import "./pageerror.css";
import React from "react";
import searchingFilesImage from "../assets/searchingFiles.jpg";
import Navbar from "../components/NavBar/NavBar";

function PageError() {
  return (
    <div>
      <div className="container">
        <h3>Dhéliat n’a pas trouvé votre page</h3>
        <img
          src={searchingFilesImage}
          alt="Dhéliat cherche la page mais est perdu dans son pc et la météo"
          className="imgError"
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

export default PageError;
