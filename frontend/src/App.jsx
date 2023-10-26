import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import Cards from "./components/Cards/Cards";
import DateList from "./components/DateList/DateList";

function App() {
  const handleSearchClick = () => {
    // Logique pour gérer la recherche
  };

  // Titre de la page (passez le titre en tant que prop)
  const pageTitle = "Titre de la page actuelle";
  // rendu de la page
  return (
    <div>
      <header>
        <h1>{pageTitle}</h1>
      </header>
      <main>
        <Cards />
        <DateList />
      </main>
      <footer>
        {/* Contenu du footer avec le composant Navbar et le bouton de recherche */}
        <div className="footer-content">
          <Navbar />
          <button type="button" onClick={handleSearchClick}>
            Recherche
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
