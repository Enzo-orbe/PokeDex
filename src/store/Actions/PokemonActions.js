import axios from "axios";
import { GET_POKEMONS } from "../Constants";

export function getAllPokemons(offset) {
  return async (dispatch) => {
    const value = offset;
    console.log(value);
    const result = await axios(
      ` https://pokeapi.co/api/v2/pokemon?limit=5&offset=${offset}.`,
      console.log(
        ` https://pokeapi.co/api/v2/pokemon?limit=5&offset=${offset}.`
      )
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
