import React from "react";
import "./SearchBar.scss";

export default function SearchBar() {
  return (
    <div className="search">
      <div className="search__input">
        <input type="text" name="pokemon" placeholder="Busca tu pokemon" />
      </div>
      <div className="search__button">
        <button>BUSCAR</button>
      </div>
    </div>
  );
}
