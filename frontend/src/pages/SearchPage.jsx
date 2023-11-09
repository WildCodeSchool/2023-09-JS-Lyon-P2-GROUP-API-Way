import React from "react";
import "./searchPage.css";
import Navbar from "../components/NavBar/NavBar";
import WeatherAPI from "../components/Cards/WeatherAPI/WeatherAPI";

function SearchPage() {
  return (
    <div className="search">
      <WeatherAPI />
      <footer>
        {" "}
        <div className="footer-content">
          <Navbar />
        </div>
      </footer>{" "}
    </div>
  );
}

export default SearchPage;
