import { GET_POKEMONS } from "../Constants";

const initialState = {
  pokemon: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemon: action.payload,
      };

    default:
      return state;
  }
};
