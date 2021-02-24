import axios from "axios";
import { GET_POKEMONS, GET_POKEMON_ID } from "../Constants";

export function getAllPokemons(offset) {
  return async (dispatch) => {
    const result = await axios(
      ` https://pokeapi.co/api/v2/pokemon?limit=5&offset=${offset}.`
    );
    const data = result.data.results.map(async (r, index) => {
      return await axios(`${r.url}`);
    });
    const obj = await Promise.all(data);
    dispatch({
      type: GET_POKEMONS,
      payload: obj,
    });
  };
}

export function getPokemonId(id) {
  return async (dispatch) => {
    try {
      const result = await axios(` https://pokeapi.co/api/v2/pokemon/${id}`);
      dispatch({
        type: GET_POKEMON_ID,
        payload: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
