import React, { useState } from "react";
import "./Cards.scss";

export default function Cards({ data }) {
  const [result, setResults] = useState(data.data.results);

  return (
    <div className="card-container">
      {result.map((r) => (
        <div className="card" key={r.name}>
          <div className="card__image">
            <img
              src="https://cdn.pixabay.com/photo/2020/07/21/16/10/pokemon-5426712_960_720.png"
              alt="Pokemon"
            />
          </div>
          <div>
            <div className="card__tittle">
              <h1>{r.name}</h1>
            </div>
            <div className="card__text">
              <p>Fuerza</p>
              <p>Color</p>
              <p>Tipo</p>
            </div>
            <div className="card__button">
              <button>Ver Mas</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
