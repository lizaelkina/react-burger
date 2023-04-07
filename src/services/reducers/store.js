import {combineReducers} from 'redux';
import {burgerIngredientsReducer} from './burger-ingredients';
import {burgerConstructorReducer} from './burger-constructor';
import {createOrderReducer} from './create-order';
import {createRegistrationReducer} from './registration';
import {createAuthorizationReducer} from './authorization';

export const rootReducer = combineReducers({
  burgerIngredients: burgerIngredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  createOrder: createOrderReducer,
  createRegistration: createRegistrationReducer,
  createAuthorization: createAuthorizationReducer,
});
