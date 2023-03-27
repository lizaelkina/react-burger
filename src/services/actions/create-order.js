import {createOrder} from '../../utils/api';

export const CREATE_ORDER_LOADING = 'CREATE_ORDER_LOADING';
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS';
export const CREATE_ORDER_FAILED = 'CREATE_ORDER_FAILED';
export const CLOSE_ORDER_MODAL = 'CLOSE_ORDER_MODAL';

export const startCreatingOrder = (ingredientIdList) => dispatch => {
  dispatch({
    type: CREATE_ORDER_LOADING,
  })

  createOrder(ingredientIdList).then(number => {
    dispatch({
      type: CREATE_ORDER_SUCCESS,
      number: number,
    })
  }).catch(error => {
    dispatch({
      type: CREATE_ORDER_FAILED,
      error: error,
    })
  })
};

export function closeOrderModal() {
  return {
    type: CLOSE_ORDER_MODAL,
  }
}
