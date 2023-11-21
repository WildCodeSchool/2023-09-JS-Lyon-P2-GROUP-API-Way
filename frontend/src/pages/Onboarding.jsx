import React from "react";
import logo from "../assets/logoBeauty.jpg";
import "./onBoarding.scss";

function Onboarding() {
  return (
    <div className="onboarding-container">
      <a href="/accueil">
        <img src={logo} alt="Le logo de Dhéliat Chronicle" />
      </a>{" "}
      <h1>Cliquez sur l’image pour commencer</h1>
    </div>
  );
}

export default Onboarding;
