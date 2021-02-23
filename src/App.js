import { useEffect } from "react";
import Cards from "./components/Cards/Cards";
import Navbar from "./components/Navbar/Navbar";
import { getAllPokemons } from "./store/Actions/PokemonActions";

import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPokemons(0));
  }, []);

  return (
    <div>
      <Navbar />
      <Cards />
    </div>
  );
}

export default App;
