import React from 'react';
import ReactDOMClient from 'react-dom/client';
import {compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from './services/reducers';
import {App} from './components/app/app';
import './index.css';

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const enhancer = composeEnhancers();
const store = createStore(rootReducer, enhancer);

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
    </React.StrictMode>
);
