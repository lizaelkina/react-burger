import {getIngredients} from '../../utils/api';

export const GET_INGREDIENTS_LOADING = 'GET_INGREDIENTS_LOADING';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const SELECT_INGREDIENT_GROUP = 'SELECT_INGREDIENT_GROUP';

export const loadIngredients = () => dispatch => {
  dispatch({
    type: GET_INGREDIENTS_LOADING,
  })

  getIngredients().then(ingredients => {
    dispatch({
      type: GET_INGREDIENTS_SUCCESS,
      ingredients: ingredients,
    })
  }).catch(error => {
    dispatch({
      type: GET_INGREDIENTS_FAILED,
      error: error,
    })
  })
};

export function selectIngredientGroup(group) {
  return {
    type: SELECT_INGREDIENT_GROUP,
    group,
  }
}
