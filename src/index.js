import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"

import rootReducer from './reducers'
import App from "./App";


const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();

  return result;
}

const store = createStore(rootReducer, applyMiddleware(logger))

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
