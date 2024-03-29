import {
  CLOSE_ORDER_MODAL,
  CREATE_ORDER_FAILED,
  CREATE_ORDER_LOADING,
  CREATE_ORDER_SUCCESS,
  TCreateOrderActions
} from '../../actions/create-order';

type TCreateOrderState = {
  isOpenModal: boolean;
  isLoading: boolean;
  success: boolean;
  number: number | null;
  errorMessage: string | null;
}

export const initialState: TCreateOrderState = {
  isOpenModal: false,
  isLoading: false,
  success: false,
  number: null,
  errorMessage: null,
}

export const createOrderReducer = (state = initialState, action: TCreateOrderActions): TCreateOrderState => {
  switch (action.type) {
    case CREATE_ORDER_LOADING: {
      return {
        ...state,
        isOpenModal: true,
        isLoading: true,
        success: false,
        number: null,
        errorMessage: null,
      }
    }
    case CREATE_ORDER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        success: true,
        number: action.number,
      }
    }
    case CREATE_ORDER_FAILED: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.error,
      }
    }
    case CLOSE_ORDER_MODAL: {
      return {
        ...state,
        isOpenModal: false,
      }
    }
    default: {
      return state;
    }
  }
}
