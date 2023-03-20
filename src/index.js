import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import {App} from './components/app/app';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
);
