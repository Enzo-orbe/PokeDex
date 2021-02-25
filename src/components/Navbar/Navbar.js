import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__image">
        <Link to="/">
          <img
            src="https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536849_960_720.png"
            alt="Poke-api"
          />
        </Link>
      </div>
      <div className="navbar__tittle">
        <h3>PokeDex</h3>
      </div>
    </nav>
  );
}
