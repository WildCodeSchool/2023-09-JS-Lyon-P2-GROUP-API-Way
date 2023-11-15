import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import Cards from "./components/Cards/Cards";
import { ApiWeatherProvider } from "./components/contexts/ApiWeatherContext";

function App() {
  const pageTitle = "Lyon";
  return (
    <div>
      <header>
        <h1>{pageTitle}</h1>
      </header>
      <main>
        <ApiWeatherProvider>
          <Cards />
        </ApiWeatherProvider>
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
