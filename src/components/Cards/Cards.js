import React from "react";
import { useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination";
import Spinner from "../Spinner/Spinner";
import "./Cards.scss";

export default function Cards() {
  const state = useSelector((state) => state.pokemons.pokemon);
  return (
    <>
      <div className="card-container">
        {state && state.length > 0 ? (
          state.map((result) => (
            <div className="card" key={result.data.id}>
              <div className="card__image">
                <img src={result.data.sprites.front_default} alt="Pokemon" />
              </div>
              <div>
                <div className="card__tittle">
                  <h1>{result.data.name.toUpperCase()}</h1>
                </div>
                <div className="card__text">
                  <p>Altura: {result.data.height}</p>
                  <p>Peso: {result.data.weight} </p>
                  <p>Tipo: {result.data.types[0].type.name}</p>
                </div>
                <div className="card__button">
                  <button>Ver Mas</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <Spinner />
        )}
      </div>
      <Pagination />
    </>
  );
}
