import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
// import {
//   applyMiddleware,
//   compose,
//   legacy_createStore as createStore,
// } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
//import { thunk } from 'redux-thunk';
import {logger } from './middlewares';
import './index.css';
import rootReducer from './reducers/rootReducer'; //rootReducer es un helper para combinar reducers


const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

/*
const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(applyMiddleware(thunk, logger));

const store = createStore(rootReducer, composedEnhancers);
//composedEnhancers funcion de order superior HOC que toma el createStore potenciada (potencializador del esatdo)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
*/