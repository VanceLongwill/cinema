import { applyMiddleware, compose, createStore, Store } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers";
import rootSaga from "../sagas";

import { AppState } from "../types";

export default function makeStore(
  preloadedState: Partial<AppState> = {}
): Store<AppState> {
  const sagaMiddleware = createSagaMiddleware();

  let composeEnhancers = compose;

  if (typeof window !== "undefined") {
    composeEnhancers =
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
