import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import Cards from "./components/Cards/Cards";
import { useApiWeatherContext } from "./components/contexts/ApiWeatherContext";
import SearchFonction from "./pages/SearchFonction";

function App() {
  const { search, openSearchBar } = useApiWeatherContext();
  //  const { compareJ1, openCompareJ1 } = useApiWeatherContext();
  //  const { compareJ2, openCompareJ2 } = useApiWeatherContext();
  //  const { compare3, openCompareJ3 } = useApiWeatherContext();

  return (
    <div>
      <header>
        <h1>{search === "" ? "Lyon" : search}</h1>
      </header>
      <div
        className={
          openSearchBar ? "search-container-open" : "search-container-close"
        }
      >
        <SearchFonction />
      </div>
      <main>
        <Cards />
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
