import "./card.css";
import cloud from "./assets/cloud.svg";
import rain from "./assets/rain.svg";
import smog from "./assets/smog.svg";
import snowflake from "./assets/snowflake.svg";
import storm from "./assets/storm.svg";
import sunRain from "./assets/sun-rain.svg";
import sun from "./assets/sun.svg";
import { useApiWeatherContext } from "../contexts/ApiWeatherContext";
import Loading from "../Loading/Loading";

const meteoVisuel = [
  {
    main: "Clear",
    class: "clearSky card",
    image: sun,
    description: "soleil",
  },
  {
    main: "Clouds",
    class: "scatteredClouds card",
    image: cloud,
    description: "nuageux",
  },
  {
    main: "Drizzle",
    class: "showerRain card",
    image: rain,
    description: "averses",
  },
  {
    main: "Rain",
    class: "rain card",
    image: sunRain,
    description: "pluie",
  },
  {
    main: "Thunderstorm",
    class: "thunderstorm card",
    image: storm,
    description: "orageux",
  },
  {
    main: "Snow",
    class: "snow card",
    image: snowflake,
    description: "neige",
  },
  {
    main: "Mist",
    class: "mist card",
    image: smog,
    description: "brouillard",
  },
];

function getNextTargetDate(origin, jour) {
  const target = new Date(origin.getTime());
  target.setUTCDate(origin.getUTCDate() + jour);
  target.setUTCHours(11, 0, 0, 0);
  return target.getTime() / 1000;
}

function Cards() {
  const { weather } = useApiWeatherContext();

  if (weather === undefined) {
    return <Loading />;
  }

  const jour1 = new Date(weather.list[0].dt * 1000);
  const ecartJour2 = 1;
  const ecartJour3 = 2;

  const dtJour2 = getNextTargetDate(jour1, ecartJour2);
  const dtJour3 = getNextTargetDate(jour1, ecartJour3);

  const jour2 = weather.list.find((element) => element.dt > dtJour2);
  const jour3 = weather.list.find((element) => element.dt > dtJour3);

  const meteoJ1 = [
    {
      dt: weather.list[0].dt,
      date: weather.list[0].dt_txt.slice(0, 10),
      temperature: Math.round(weather.list[0].main.temp),
    },
    {
      dt: dtJour2,
      date: jour2.dt_txt.slice(0, 10),
      temperature: Math.round(jour2.main.temp),
    },
    {
      dt: dtJour3,
      date: jour3.dt_txt.slice(0, 10),
      temperature: Math.round(jour3.main.temp),
    },
  ];

  const meteoMainJ1 = meteoVisuel.find(
    (element) => element.main === weather.list[0].weather[0].main
  );

  const meteoMainJ2 = meteoVisuel.find(
    (element) => element.main === jour2.weather[0].main
  );

  const meteoMainJ3 = meteoVisuel.find(
    (element) => element.main === jour3.weather[0].main
  );
  const dateFormatter = (date) => {
    return new Date(date).toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  };
  const formattedDate1 = dateFormatter(meteoJ1[0].date);
  const formattedDate2 = dateFormatter(meteoJ1[1].date);
  const formattedDate3 = dateFormatter(meteoJ1[2].date);

  return (
    <div>
      <div className={meteoMainJ1.class}>
        <h3 className="date">{formattedDate1}</h3>
        <div className="cardContent">
          <img src={meteoMainJ1.image} alt={meteoMainJ1.description} />
          <p className="temperature">{meteoJ1[0].temperature}°</p>
          <button
            type="button"
            aria-label="bouton de comparaison avec aujourd'hui"
            className="compare"
            id="compareJ1"
          >
            comparer
          </button>
        </div>
      </div>
      <div className={meteoMainJ2.class}>
        <h3 className="date">{formattedDate2}</h3>
        <div className="cardContent">
          <img src={meteoMainJ2.image} alt={meteoMainJ2.description} />
          <p className="temperature">{meteoJ1[1].temperature}°</p>
          <button
            type="button"
            aria-label="bouton de comparaison avec demain"
            className="compare"
            id="compareJ2"
          >
            comparer
          </button>
        </div>
      </div>
      <div className={meteoMainJ3.class}>
        <h3 className="date">{formattedDate3}</h3>
        <div className="cardContent">
          <img src={meteoMainJ3.image} alt={meteoMainJ3.description} />
          <p className="temperature">{meteoJ1[2].temperature}°</p>
          <button
            type="button"
            aria-label="bouton de comparaison avec aujourd'hui"
            className="compare"
            id="compareJ3"
          >
            comparer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
