import React from 'react';
import ReactDOMClient from 'react-dom/client';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from './services/reducers';
import {App} from './components/app/app';
import './index.css';

const store = createStore(rootReducer);

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
    </React.StrictMode>
);
