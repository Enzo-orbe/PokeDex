import { useEffect, useState } from "react";
import Cards from "./components/Cards/Cards";
import Navbar from "./components/Navbar/Navbar";
import { getAllPokemons } from "./store/Actions/PokemonActions";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Pokemon from "./components/Pokemon/Pokemon";

function App() {
  const dispatch = useDispatch();
  const [offSet, setOffSet] = useState(0);

  useEffect(() => {
    dispatch(getAllPokemons(offSet));
  }, []);

  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Cards} />
      <Route exact path="/pokemon/:id" component={Pokemon} />
    </Router>
  );
}

export default App;
