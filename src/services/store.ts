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

export const store = createStore(
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

export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    never,
    TApplicationActions>;
