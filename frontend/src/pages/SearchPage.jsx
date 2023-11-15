import React from "react";
import Navbar from "../components/NavBar/NavBar";
import SearchFonction from "./SearchFonction";

function SearchPage() {
  return (
    <div className="search">
      <SearchFonction />
      <footer>
        {" "}
        <div className="footer-content">
          <Navbar />
        </div>
      </footer>{" "}
    </div>
  );
}

export default SearchPage;
