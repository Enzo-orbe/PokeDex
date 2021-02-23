import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllPokemons } from "../../store/Actions/PokemonActions";
import "./Pagination.scss";

export default function Pagination() {
  const [count, setCount] = useState(0);
  const [offset, setOffSet] = useState(5);
  const [last, setLast] = useState(0);
  const value = 5;
  const dispatch = useDispatch();

  const handleClickSiguiente = () => {
    setOffSet(offset + value);
    setLast(last + value);
    dispatch(getAllPokemons(offset));
    setCount(count + 1);
  };

  const handleClickAnterior = () => {
    if (count > 0) {
      setLast(last - value);
      dispatch(getAllPokemons(last - value));
      setCount(count - 1);
    }
  };

  return (
    <div className="pagination">
      <div className="pagination__button">
        <button onClick={handleClickAnterior}>Anterior</button>
      </div>
      <div className="pagination__count">
        <p>{count}</p>
      </div>
      <div className="pagination__button">
        <button onClick={handleClickSiguiente}>Siguiente</button>
      </div>
    </div>
  );
}
