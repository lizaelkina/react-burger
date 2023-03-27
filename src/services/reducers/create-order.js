import {
  CLOSE_ORDER_MODAL,
  CREATE_ORDER_FAILED,
  CREATE_ORDER_LOADING,
  CREATE_ORDER_SUCCESS
} from '../actions/create-order';

const initialState = {
  isOpenModal: false,
  isLoading: false,
  number: null,
  error: null,
};

export const createOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER_LOADING: {
      return {
        ...state,
        isOpenModal: true,
        isLoading: true,
        number: null,
        error: null,
      }
    }
    case CREATE_ORDER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        number: action.number,
      }
    }
    case CREATE_ORDER_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.error,
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
};
