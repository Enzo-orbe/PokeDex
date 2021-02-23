import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllPokemons } from "../../store/Actions/PokemonActions";
import "./Pagination.scss";

export default function Pagination() {
  const [count, setCount] = useState(0);
  const [offset, setOffSet] = useState(0);

  const dispatch = useDispatch();

  const handleClickSiguiente = async () => {
    await setOffSet(offset + 5);
    await dispatch(getAllPokemons(offset));
    await setCount(count + 1);
  };

  const handleClickAnterior = async () => {
    if (offset > 0) {
      await setOffSet(offset - 5);
      await dispatch(getAllPokemons(offset));
    }
    if (count > 0) {
      await setCount(count - 1);
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
