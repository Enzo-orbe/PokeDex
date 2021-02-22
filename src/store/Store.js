import { createStore, applyMiddleware, compose } from "redux";
import Reducer from "./Reducer";

import thunk from "redux-thunk";

const store = createStore(
  Reducer,
  compose(
    applyMiddleware(thunk),
    typeof window === "object" &&
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export default store;
