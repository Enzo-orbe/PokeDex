import axios from "axios";
import { GET_POKEMONS } from "../Constants";

export function getAllPokemons() {
  return async (dispatch) => {
    try {
      const result = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=5&offset=5."
      );
      dispatch({
        type: GET_POKEMONS,
        payload: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
