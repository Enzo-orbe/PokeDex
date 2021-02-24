import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonId } from "../../store/Actions/PokemonActions";
import "./Pokemon.scss";

export default function Pokemon() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.pokemons.onePokemon);
  console.log(data);

  useEffect(() => {
    dispatch(getPokemonId(id));
  }, []);

  return (
    <div className="container">
      <div className="container__image">
        <img src={data.sprites && data.sprites.front_default} alt="Pokemon" />
      </div>
      <div className="container__text">
        <div className="tittle">
          <h1>{data && data.name}</h1>
        </div>
        <div className="data">
          <p>Peso: {data && data.weight}</p>
          <p>Tipo: {data.types && data.types[0].type.name}</p>
          <p>Altura: {data && data.height}</p>
        </div>
      </div>
    </div>
  );
}
