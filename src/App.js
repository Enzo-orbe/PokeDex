import { useEffect } from "react";
import Cards from "./components/Cards/Cards";
import Navbar from "./components/Navbar/Navbar";
import { getAllPokemons } from "./store/Actions/PokemonActions";

import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.pokemons.pokemon);

  useEffect(() => {
    dispatch(getAllPokemons());
  }, []);

  return (
    <div>
      <Navbar />
      <Cards data={data} />
    </div>
  );
}

export default App;
