import "./App.css";
import Navbar from "./NavBar";
import Cards from "./components/Cards/Cards";
import DateList from "./components/DateList/DateList";

function App() {
  return (
    <div>
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
