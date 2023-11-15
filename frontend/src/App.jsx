import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import Cards from "./components/Cards/Cards";
import DateList from "./components/DateList/DateList";
import { ApiWeatherProvider } from "./components/contexts/ApiWeatherContext";

function App() {
  // Titre de la page (passez le titre en tant que prop)
  const pageTitle = "Lyon";
  // rendu de la page
  return (
    <div>
      <header>
        <h1>{pageTitle}</h1>
      </header>
      <main>
        <ApiWeatherProvider>
          <Cards />
        </ApiWeatherProvider>
        <DateList />
      </main>
      <footer>
        <div className="footer-content">
          <Navbar />
        </div>
      </footer>
    </div>
  );
}

export default App;
