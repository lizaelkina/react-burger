import {IOrderList} from '../../../utils/data-types';
import {
  TWSOrdersActions,
  WS_ORDERS_CLOSE,
  WS_ORDERS_CONNECT,
  WS_ORDERS_ERROR,
  WS_ORDERS_MESSAGE,
  WS_ORDERS_OPEN
} from '../../actions/orders';

type TOrdersState = {
  wsConnecting: boolean;
  wsConnected: boolean;
  data: IOrderList | null;
  error: string;
}

export const initialState: TOrdersState = {
  wsConnecting: false,
  wsConnected: false,
  data: null,
  error: '',
}

export const wsOrdersReducer = (state = initialState, action: TWSOrdersActions): TOrdersState => {
  switch (action.type) {
    case WS_ORDERS_CONNECT: {
      return {
        ...state,
        wsConnecting: true,
        wsConnected: false,
      }
    }
    case WS_ORDERS_OPEN: {
      return {
        ...state,
        wsConnecting: false,
        wsConnected: true,
      }
    }
    case WS_ORDERS_CLOSE: {
      return {
        ...state,
        wsConnecting: false,
        wsConnected: false,
      }
    }
    case WS_ORDERS_MESSAGE: {
      return {
        ...state,
        data: action.data,
      }
    }
    case WS_ORDERS_ERROR: {
      return {
        ...state,
        error: action.error,
      }
    }
    default: {
      return state;
    }
  }
}
