import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo,
} from "react";
import PropTypes from "prop-types";

const api = {
  key: "b68e3c8b3a181508b0ac48be82afd936",
  base: "https://api.openweathermap.org/data/2.5/",
};

const ApiWeatherContext = createContext();

export function ApiWeatherProvider({ children }) {
  const [search, setSearch] = useState("Lyon");
  const [weather, setWeather] = useState();
  const searchPressed = () => {
    fetch(`${api.base}forecast?q=${search}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  useEffect(() => {
    searchPressed();
  }, [search]);

  const contextValue = useMemo(
    () => ({
      searchPressed,
      weather,
      search,
      setSearch,
    }),
    [searchPressed, setSearch, weather, search]
  );

  return (
    <ApiWeatherContext.Provider value={contextValue}>
      {children}
    </ApiWeatherContext.Provider>
  );
}

export const useApiWeatherContext = () => useContext(ApiWeatherContext);

ApiWeatherProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
