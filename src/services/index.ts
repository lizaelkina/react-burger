import {Action, ActionCreator, applyMiddleware, legacy_createStore as createStore} from 'redux';
import thunk, {ThunkAction} from 'redux-thunk';
import {TAuthActions} from './actions/auth';
import {TLoginActions} from './actions/login';
import {TResetPasswordActions} from './actions/reset-password';
import {TForgotPasswordActions} from './actions/forgot-password';
import {TProfileActions} from './actions/profile';
import {TCreateOrderActions} from './actions/create-order';
import {TBurgerIngredientsActions} from './actions/burger-ingredients';
import {TBurgerConstructorActions} from './actions/burger-constructor';
import {TRegisterActions} from './actions/register';
import {rootReducer} from './reducers/store';
import {composeWithDevTools} from '@redux-devtools/extension';

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
export type AppThunk<ReturnType = void> = ActionCreator<ThunkAction<ReturnType, Action, RootState, TApplicationActions>>;
export type AppDispatch = typeof store.dispatch;
