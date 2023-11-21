import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo,
} from "react";
import PropTypes from "prop-types";

const api = {
  key: import.meta.env.VITE_SECRET_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/",
};

const ApiWeatherContext = createContext();

export function ApiWeatherProvider({ children }) {
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState();
  const searchPressed = () => {
    fetch(
      `${api.base}forecast?q=${
        search === "" ? "Lyon" : search
      }&units=metric&appid=${api.key}`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  const handleOpenSearch = () => {
    setOpenSearchBar(!openSearchBar);
  };
  useEffect(() => {
    searchPressed();
  }, []);

  const contextValue = useMemo(
    () => ({
      searchPressed,
      weather,
      search,
      setSearch,
      openSearchBar,
      setOpenSearchBar,
      handleOpenSearch,
    }),
    [
      searchPressed,
      setSearch,
      weather,
      search,
      openSearchBar,
      setOpenSearchBar,
      handleOpenSearch,
    ]
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
