// import { applyMiddleware, combineReducers, createStore } from "redux";
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { postProductsReducer, productsReducer } from "./reducers/products";

const reducers = combineReducers({
  products: productsReducer,
  addProducts: postProductsReducer,
  // users: usersReducer,
});

const configureStore = () => {
  const store = createStore(reducers, applyMiddleware(thunk));
  return { store };
};

export default configureStore;
