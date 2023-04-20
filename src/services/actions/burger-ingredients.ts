import {api} from '../../utils/api';
import {IIngredient} from '../../utils/data-types';
import {AppDispatch, AppThunk, RootState} from '../store';

export const GET_INGREDIENTS_LOADING: 'GET_INGREDIENTS_LOADING' = 'GET_INGREDIENTS_LOADING';
export const GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS' = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED: 'GET_INGREDIENTS_FAILED' = 'GET_INGREDIENTS_FAILED';
export const SELECT_INGREDIENT_GROUP: 'SELECT_INGREDIENT_GROUP' = 'SELECT_INGREDIENT_GROUP';

export interface IGetIngredientsLoadingAction {
  readonly type: typeof GET_INGREDIENTS_LOADING;
}

export interface IGetIngredientsSuccessAction {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  ingredients: Array<IIngredient>;
}

export interface IGetIngredientsFailedAction {
  readonly type: typeof GET_INGREDIENTS_FAILED;
  error: string;
}

export interface ISelectIngredientGroupAction {
  readonly type: typeof SELECT_INGREDIENT_GROUP;
  group: string;
}

export type TBurgerIngredientsActions =
    IGetIngredientsLoadingAction
    | IGetIngredientsSuccessAction
    | IGetIngredientsFailedAction
    | ISelectIngredientGroupAction;


export const loadIngredients = (): AppThunk => (dispatch: AppDispatch, getState: () => RootState) => {
  const ingredients = getState().burgerIngredients.ingredients;
  if (ingredients.length === 0) {
    dispatch({
      type: GET_INGREDIENTS_LOADING,
    })

    api.getIngredients().then(response => {
      dispatch({
        type: GET_INGREDIENTS_SUCCESS,
        ingredients: response.data,
      })
    }).catch(response => {
      dispatch({
        type: GET_INGREDIENTS_FAILED,
        error: response.error,
      })
    })
  }
}

export const selectIngredientGroup = (group: string): ISelectIngredientGroupAction => {
  return {
    type: SELECT_INGREDIENT_GROUP,
    group,
  }
}
