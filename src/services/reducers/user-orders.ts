import {TWSUserOrdersActions, WS_USER_ORDERS_CONNECT, WS_USER_ORDERS_MESSAGE} from '../actions/user-orders';
import {IOrderList} from '../../utils/data-types';

type TUserOrdersState = {
  wsConnected: boolean,
  data: IOrderList | null,
}

const initialState: TUserOrdersState = {
  wsConnected: false,
  data: null,
}

export const wsUserOrdersReducer = (state = initialState, action: TWSUserOrdersActions): TUserOrdersState => {
  switch (action.type) {
    case WS_USER_ORDERS_CONNECT: {
      return {
        ...state,
        wsConnected: true,
      }
    }
    case WS_USER_ORDERS_MESSAGE: {
      return {
        ...state,
        data: action.data,
      }
    }
    default: {
      return state;
    }
  }
}
