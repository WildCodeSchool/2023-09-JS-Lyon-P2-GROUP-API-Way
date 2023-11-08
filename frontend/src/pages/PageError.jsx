import "./pageerror.css";
import React from "react";
import searchingFilesImage from "../assets/searchingFiles.jpg";

function PageError() {
  return (
    <div className="container">
      <h3>Dhéliat n’a pas trouvé votre page</h3>
      <img
        src={searchingFilesImage}
        alt="Dhéliat cherche la page mais est perdu dans son pc et la météo"
        className="imgError"
      />
    </div>
  );
}

export default PageError;
