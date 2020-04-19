import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { dashboard } from "./Dashboard/reducer";
import { auth } from "./Login/reducer";
import sagaWatcher from "./sagaWatcher";

const reducers = combineReducers({
  auth,
  dashboard,
});

const sagaMiddleware = createSagaMiddleware();

export const reduxStore = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagaWatcher);
