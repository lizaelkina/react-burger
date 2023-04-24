import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {composeWithDevTools} from '@redux-devtools/extension';
import {rootReducer} from './reducers/root-reducer';
import {TAuthActions} from './actions/auth';
import {TLoginActions} from './actions/login';
import {TResetPasswordActions} from './actions/reset-password';
import {TForgotPasswordActions} from './actions/forgot-password';
import {TProfileActions} from './actions/profile';
import {TCreateOrderActions} from './actions/create-order';
import {TBurgerIngredientsActions} from './actions/burger-ingredients';
import {TBurgerConstructorActions} from './actions/burger-constructor';
import {TRegisterActions} from './actions/register';
import {TWSOrdersActions, wsOrdersTypeActions} from './actions/orders';
import {TWSUserOrdersActions, wsUserOrdersTypeActions} from './actions/user-orders';
import {socketMiddleware} from './middleware/socket-middleware';

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk),
        applyMiddleware(socketMiddleware(wsUserOrdersTypeActions)),
        applyMiddleware(socketMiddleware(wsOrdersTypeActions)),
    )
);

export type TApplicationActions =
    TAuthActions
    | TLoginActions
    | TResetPasswordActions
    | TForgotPasswordActions
    | TProfileActions
    | TCreateOrderActions
    | TBurgerIngredientsActions
    | TBurgerConstructorActions
    | TRegisterActions
    | TWSOrdersActions
    | TWSUserOrdersActions;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    never,
    TApplicationActions>;
