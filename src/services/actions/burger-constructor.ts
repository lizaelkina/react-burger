import {IIngredient} from '../../utils/data-types';

export const ADD_INGREDIENT: 'ADD_INGREDIENT' = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT: 'DELETE_INGREDIENT' = 'DELETE_INGREDIENT';
export const CLEAR_INGREDIENTS: 'CLEAR_INGREDIENTS' = 'CLEAR_INGREDIENTS';
export const MOVE_INGREDIENT: 'MOVE_INGREDIENT' = 'MOVE_INGREDIENT';

export interface IAddIngredientAction {
  readonly type: typeof ADD_INGREDIENT;
  ingredient: IIngredient;
}

export interface IDeleteIngredientAction {
  readonly type: typeof DELETE_INGREDIENT;
  ingredient: IIngredient;
}

export interface IClearIngredientsAction {
  readonly type: typeof CLEAR_INGREDIENTS;
}

export interface IMoveIngredientAction {
  readonly type: typeof MOVE_INGREDIENT;
  fromUUID: string;
  toUUID: string;
}

export type TBurgerConstructorActions =
    IAddIngredientAction
    | IDeleteIngredientAction
    | IClearIngredientsAction
    | IMoveIngredientAction;

export const addIngredient = (ingredient: IIngredient): IAddIngredientAction => {
  return {
    type: ADD_INGREDIENT,
    ingredient,
  }
}

export const deleteIngredient = (ingredient: IIngredient): IDeleteIngredientAction => {
  return {
    type: DELETE_INGREDIENT,
    ingredient,
  }
}

export const clearIngredients = (): IClearIngredientsAction => {
  return {
    type: CLEAR_INGREDIENTS,
  }
}

export const moveIngredient = (fromUUID: string, toUUID: string): IMoveIngredientAction => {
  return {
    type: MOVE_INGREDIENT,
    fromUUID,
    toUUID,
  }
}
