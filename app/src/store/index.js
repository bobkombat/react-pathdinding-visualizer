import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import boardReducers from "./reducers/board.js";

const reducers = combineReducers({
  boardReducers,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
