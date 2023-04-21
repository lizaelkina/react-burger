import {
  TWSUserOrdersActions,
  WS_USER_ORDERS_CLOSE,
  WS_USER_ORDERS_CONNECT,
  WS_USER_ORDERS_ERROR,
  WS_USER_ORDERS_MESSAGE,
  WS_USER_ORDERS_OPEN
} from '../actions/user-orders';
import {IOrderList} from '../../utils/data-types';

type TUserOrdersState = {
  wsConnecting: boolean;
  wsConnected: boolean;
  data: IOrderList | null;
  error: string;
}

const initialState: TUserOrdersState = {
  wsConnecting: false,
  wsConnected: false,
  data: null,
  error: '',
}

export const wsUserOrdersReducer = (state = initialState, action: TWSUserOrdersActions): TUserOrdersState => {
  switch (action.type) {
    case WS_USER_ORDERS_CONNECT: {
      return {
        ...state,
        wsConnecting: true,
        wsConnected: false,
      }
    }
    case WS_USER_ORDERS_OPEN: {
      return {
        ...state,
        wsConnecting: false,
        wsConnected: true,
      }
    }
    case WS_USER_ORDERS_CLOSE: {
      return {
        ...state,
        wsConnecting: false,
        wsConnected: false,
      }
    }
    case WS_USER_ORDERS_MESSAGE: {
      return {
        ...state,
        data: action.data,
      }
    }
    case WS_USER_ORDERS_ERROR: {
      return {
        ...state,
        wsConnecting: false,
        wsConnected: false,
        error: action.type,
      }
    }
    default: {
      return state;
    }
  }
}
