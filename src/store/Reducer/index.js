import { combineReducers } from "redux";
import Pokemon from "./PokemonReducer";

export default combineReducers({
  pokemons: Pokemon,
});
