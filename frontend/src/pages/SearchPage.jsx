import React from "react";
import "./searchPage.css";
import Navbar from "../components/NavBar/NavBar";

function SearchPage() {
  return (
    <div className="search">
      <form className="" action="">
        <input placeholder="Search..." type="text" />
        <input type="submit" value="Go" />
      </form>
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
