import "./App.css";
import WeatherAPI from "./components/Cards/WeatherAPI/WeatherAPI";
import Navbar from "./NavBar";
import Cards from "./components/Cards/Cards";
import DateList from "./components/DateList/DateList";

function App() {
  return (
    <div>
      <WeatherAPI />
      <header />
      <main>
        <Cards />
        <DateList />
      </main>
      <footer>
        <Navbar />
      </footer>
    </div>
  );
}

export default App;
