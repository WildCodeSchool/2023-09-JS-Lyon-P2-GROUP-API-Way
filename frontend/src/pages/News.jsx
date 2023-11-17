import React from "react";
import { Link } from "react-router-dom";
import "./News.css";
import Navbar from "../components/NavBar/NavBar";
// import { useApiWeatherContext } from "../components/contexts/ApiWeatherContext";

function News() {
  // const { weather } = useApiWeatherContext();    faite venir vos data ici

  return (
    <>
      <div className="news-container">
        <Link className="back-btn" to="/accueil">
          Retour
        </Link>
        <h1>News de la journée du 17/11/23</h1>
        <div>
          <ul>
            <li>element 1</li>
            <li>element 2</li>
            <li>element 3</li>
          </ul>
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default News;
