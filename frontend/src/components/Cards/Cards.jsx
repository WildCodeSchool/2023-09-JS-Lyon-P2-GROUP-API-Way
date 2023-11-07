import Colors from "./Colors";
import ApiCall from "./ApiCall";
import Database from "./DataBase/Database";
import "./card.css";
import cloudSun from "./assets/cloud-sun.svg";
import cloud from "./assets/cloud.svg";
import rain from "./assets/rain.svg";
import smog from "./assets/smog.svg";
import snowflake from "./assets/snowflake.svg";
import storm from "./assets/storm.svg";
import sunRain from "./assets/sun-rain.svg";
import sun from "./assets/sun.svg";

const meteoVisuel = [
  {
    name: "clear sky",
    class: "clearSky card",
    image: sun,
    description: "soleil",
  },
  {
    name: "few clouds",
    class: "fewClouds card",
    image: cloudSun,
    description: "partielement nuageux",
  },
  {
    name: "scattered clouds",
    class: "scatteredClouds card",
    image: cloud,
    description: "nuageux",
  },
  {
    name: "broken clouds",
    class: "brokenClouds card",
    image: cloud,
    description: "nuages gris",
  },
  {
    name: "shower rain",
    class: "showerRain card",
    image: rain,
    description: "averses",
  },
  {
    name: "rain",
    class: "rain card",
    image: sunRain,
    description: "pluie",
  },
  {
    name: "thunderstorm",
    class: "thunderstorm card",
    image: storm,
    description: "orageux",
  },
  {
    name: "snow",
    class: "snow card",
    image: snowflake,
    description: "neige",
  },
  {
    name: "mist",
    class: "mist card",
    image: smog,
    description: "brouillard",
  },
];

function Cards() {
  return (
    <div>
      <div className={meteoVisuel[0].class}>
        <h3 className="date">58/42</h3>
        <div className="cardContent">
          <img src={meteoVisuel[0].image} alt={meteoVisuel[0].description} />
          <p className="temperature">37°</p>
        </div>
      </div>
      <div className="card cardMiddle">
        <h3 className="date">59/42</h3>
        <div className="cardContent">
          <img src={meteoVisuel[1].image} alt={meteoVisuel[1].description} />
          <p className="temperature">18°</p>
        </div>
      </div>
      <div className="card cardBottom">
        <h3 className="date">60/42</h3>
        <div className="cardContent">
          <img src={meteoVisuel[2].image} alt={meteoVisuel[2].description} />
          <p className="temperature">52°</p>
        </div>
      </div>
      <Colors />
      <ApiCall />
      <Database />
    </div>
  );
}

export default Cards;
