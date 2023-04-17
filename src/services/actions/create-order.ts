import {api} from '../../utils/api';
import {AppDispatch, AppThunk} from '../../index';

export const CREATE_ORDER_LOADING: 'CREATE_ORDER_LOADING' = 'CREATE_ORDER_LOADING';
export const CREATE_ORDER_SUCCESS: 'CREATE_ORDER_SUCCESS' = 'CREATE_ORDER_SUCCESS';
export const CREATE_ORDER_FAILED: 'CREATE_ORDER_FAILED' = 'CREATE_ORDER_FAILED';
export const CLOSE_ORDER_MODAL: 'CLOSE_ORDER_MODAL' = 'CLOSE_ORDER_MODAL';

export interface ICreateOrderLoadingAction {
  readonly type: typeof CREATE_ORDER_LOADING;
}

export interface ICreateOrderSuccessAction {
  readonly type: typeof CREATE_ORDER_SUCCESS;
  number: number;
}

export interface ICreateOrderFailedAction {
  readonly type: typeof CREATE_ORDER_FAILED;
  error: string;
}

export interface ICloseOrderModalAction {
  readonly type: typeof CLOSE_ORDER_MODAL;
}

export type TCreateOrderActions =
    ICreateOrderLoadingAction
    | ICreateOrderSuccessAction
    | ICreateOrderFailedAction
    | ICloseOrderModalAction;

export const startCreatingOrder: AppThunk = (ingredientIdList: Array<string>) => (dispatch: AppDispatch) => {
  dispatch({
    type: CREATE_ORDER_LOADING,
  })

  api.createOrder(ingredientIdList).then(response => {
    dispatch({
      type: CREATE_ORDER_SUCCESS,
      number: response.order.number,
    })
  }).catch(response => {
    dispatch({
      type: CREATE_ORDER_FAILED,
      error: response.error,
    })
  })
}

export const closeOrderModal = (): ICloseOrderModalAction => {
  return {
    type: CLOSE_ORDER_MODAL,
  }
}
