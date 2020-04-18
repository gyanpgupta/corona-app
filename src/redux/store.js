import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { details } from "./Details/reducer";
import { auth } from "./Login/reducer";
import sagaWatcher from "./sagaWatcher";

const reducers = combineReducers({
  auth,
  details,
});

const sagaMiddleware = createSagaMiddleware();

export const reduxStore = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagaWatcher);
