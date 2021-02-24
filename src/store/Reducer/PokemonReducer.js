import { GET_POKEMONS, GET_POKEMON_ID } from "../Constants";

const initialState = {
  pokemon: [],
  onePokemon: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemon: action.payload,
      };
    case GET_POKEMON_ID:
      return {
        ...state,
        onePokemon: action.payload.data,
      };

    default:
      return state;
  }
};
