import {combineReducers} from 'redux';
import {burgerIngredientsReducer} from './burger-ingredients';
import {burgerConstructorReducer} from './burger-constructor';
import {createOrderReducer} from './create-order';
import {createRegisterReducer} from './register';
import {createLoginReducer} from './login';
import {createForgotPasswordReducer} from './forgot-password';
import {createResetPasswordReducer} from './reset-password';
import {profileReducer} from './profile';
import {createAuthReducer} from './auth';

export const rootReducer = combineReducers({
  burgerIngredients: burgerIngredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  createOrder: createOrderReducer,
  createRegister: createRegisterReducer,
  createLogin: createLoginReducer,
  createForgotPassword: createForgotPasswordReducer,
  createResetPassword: createResetPasswordReducer,
  profile: profileReducer,
  auth: createAuthReducer,
});
