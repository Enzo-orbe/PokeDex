import React from "react";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__image">
        <img
          src="https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536849_960_720.png"
          alt="Poke-api"
        />
      </div>
      <div className="navbar__tittle">
        <h3>PokeDex</h3>
      </div>
    </nav>
  );
}
