import {combineReducers} from 'redux';
import {burgerIngredientsReducer} from './burger-ingredients/burger-ingredients';
import {burgerConstructorReducer} from './burger-constructor/burger-constructor';
import {createOrderReducer} from './create-order/create-order';
import {createRegisterReducer} from './register/register';
import {createLoginReducer} from './login/login';
import {createForgotPasswordReducer} from './forgot-password/forgot-password';
import {createResetPasswordReducer} from './reset-password/reset-password';
import {profileReducer} from './profile/profile';
import {createAuthReducer} from './auth/auth';
import {wsOrdersReducer} from './orders/orders';
import {wsUserOrdersReducer} from './user-orders/user-orders';

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
  wsOrders: wsOrdersReducer,
  wsUserOrders: wsUserOrdersReducer,
});
