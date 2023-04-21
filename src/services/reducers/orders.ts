import {IOrderList} from '../../utils/data-types';
import {TWSOrdersActions, WS_ORDERS_CONNECT, WS_ORDERS_MESSAGE} from '../actions/orders';

type TOrdersState = {
  wsConnected: boolean,
  data: IOrderList | null,
}

const initialState: TOrdersState = {
  wsConnected: false,
  data: null,
}

export const wsOrdersReducer = (state = initialState, action: TWSOrdersActions): TOrdersState => {
  switch (action.type) {
    case WS_ORDERS_CONNECT: {
      return {
        ...state,
        wsConnected: true,
      }
    }
    case WS_ORDERS_MESSAGE: {
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
