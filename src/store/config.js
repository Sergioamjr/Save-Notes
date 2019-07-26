import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducers from "./reducers";
import { defaultStore } from "./defaultStore";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(
  Reducers,
  defaultStore,
  composeEnhancer(applyMiddleware(thunk))
);

export default Store;
