import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonId } from "../../store/Actions/PokemonActions";
import CarouselImage from "./Carousel";
import "./Pokemon.scss";

export default function Pokemon() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.pokemons.onePokemon);

  useEffect(() => {
    dispatch(getPokemonId(id));
  }, []);

  const array = data.moves && data.moves.splice(0, 5);

  return (
    <div className="container">
      <div className="container__image">
        <CarouselImage images={data.sprites && data.sprites} />
      </div>
      <div className="container__text">
        <div className="tittle">
          <h1>{data && data.name && data.name.toUpperCase()}</h1>
        </div>
        <div className="data">
          <p>Peso: {data && data.weight}</p>
          <p>Altura: {data && data.height}</p>
          <p>Numero Pokedex: {data && data.order}</p>
          <p>Tipos:</p>
          <ul>
            {data.types &&
              data.types.map((t) => (
                <li key={t.type.name}>- {t.type.name}.</li>
              ))}
          </ul>

          <p>Movimientos:</p>
          <ul>
            {array &&
              array.map((poke) => (
                <li key={poke.move.name}>- {poke.move.name}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
