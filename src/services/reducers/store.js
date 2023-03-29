import {combineReducers} from 'redux';
import {burgerIngredientsReducer} from './burger-ingredients';
import {burgerConstructorReducer} from './burger-constructor';
import {selectedIngredientReducer} from './selected-ingredient';
import {createOrderReducer} from './create-order';

export const rootReducer = combineReducers({
  burgerIngredients: burgerIngredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  selectedIngredient: selectedIngredientReducer,
  createOrder: createOrderReducer,
});
