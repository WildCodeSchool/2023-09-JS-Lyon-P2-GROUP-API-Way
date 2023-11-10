import React from "react";
import logo from "../assets/logoBeauty.jpg";
import "./onboarding.css";

function Onboarding() {
  return (
    <div className="onboarding-container">
      <a href="/accueil">
        <img src={logo} alt="Le logo de Dhéliat Chronicle" />
      </a>{" "}
    </div>
  );
}

export default Onboarding;
