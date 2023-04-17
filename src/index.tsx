import {Provider} from 'react-redux';
import {Action, ActionCreator, applyMiddleware, Dispatch, legacy_createStore as createStore} from 'redux';
import thunk, {ThunkAction} from 'redux-thunk';
import ReactDOMClient from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {composeWithDevTools} from '@redux-devtools/extension';
import {rootReducer} from './services/reducers/store';
import {App} from './components/app/app';
import {TAuthActions} from './services/actions/auth';
import {TLoginActions} from './services/actions/login';
import {TResetPasswordActions} from './services/actions/reset-password';
import {TForgotPasswordActions} from './services/actions/forgot-password';
import {TProfileActions} from './services/actions/profile';
import {TCreateOrderActions} from './services/actions/create-order';
import {TBurgerIngredientsActions} from './services/actions/burger-ingredients';
import {TBurgerConstructorActions} from './services/actions/burger-constructor';
import {TRegisterActions} from './services/actions/register';
import './index.css';

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

type TApplicationActions =
    TAuthActions
    | TLoginActions
    | TResetPasswordActions
    | TForgotPasswordActions
    | TProfileActions
    | TCreateOrderActions
    | TBurgerIngredientsActions
    | TBurgerConstructorActions
    | TRegisterActions;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootState, TApplicationActions>>;

export type AppDispatch = Dispatch<TApplicationActions>;

const container = document.getElementById('root') as HTMLDivElement;
const root = ReactDOMClient.createRoot(container);

root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
);
