import {Provider} from 'react-redux';
import ReactDOMClient from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {App} from './components/app/app';
import './index.css';
import {store} from './services';

const container = document.getElementById('root') as HTMLDivElement;
const root = ReactDOMClient.createRoot(container);

root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
);
