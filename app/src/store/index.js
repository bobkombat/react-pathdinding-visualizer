import { createStore, applyMiddlewares, combineReducers } from "redux";
import thunk from "redux-thunk";

const reducers = combineReducers({});

export default store = createStore(reducers, applyMiddlewares(thunk));
