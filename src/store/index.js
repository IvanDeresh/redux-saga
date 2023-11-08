import { applyMiddleware, createStore, combineReducers } from "redux";
import reducer from "./countReducer";
import userReducer from "./userReducer";
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "../saga/index";
const myReducers = combineReducers({
  counts: reducer,
  user: userReducer,
});
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(myReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootWatcher);
