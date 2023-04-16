import {api} from '../../utils/api';

export const GET_INGREDIENTS_LOADING = 'GET_INGREDIENTS_LOADING';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const SELECT_INGREDIENT_GROUP = 'SELECT_INGREDIENT_GROUP';

export const loadIngredients = () => (dispatch, getState) => {
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

export function selectIngredientGroup(group) {
  return {
    type: SELECT_INGREDIENT_GROUP,
    group,
  }
}
