import React from "react";
import "./searchPage.css";

function SearchPage() {
  return (
    <div className="search">
      <form className="" action="">
        <input placeholder="Search..." type="text" />
        <input type="submit" value="Go" />
        <button type="button">Votre texte du bouton</button>
      </form>
    </div>
  );
}

export default SearchPage;
