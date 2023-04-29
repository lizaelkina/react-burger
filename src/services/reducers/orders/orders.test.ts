import {initialState, wsOrdersReducer} from './orders';
import {
  WS_ORDERS_CLOSE,
  WS_ORDERS_ERROR,
  WS_ORDERS_MESSAGE,
  WS_ORDERS_OPEN,
  wsOrdersConnect
} from '../../actions/orders';
import {IOrderList} from '../../../utils/data-types';

const testOrderList: IOrderList = {
  orders: [],
  success: false,
  total: 0,
  totalToday: 0,
};

describe('check orders reducer', () => {
  it('should return initial state', () => {
    expect(wsOrdersReducer(undefined, {} as any)).toEqual(initialState);
  });

  it('should return connect state', () => {
    expect(
        wsOrdersReducer(
            initialState,
            wsOrdersConnect(''),
        )
    ).toEqual({
      ...initialState,
      wsConnecting: true,
      wsConnected: false,
    });
  });

  it('should return open state', () => {
    expect(
        wsOrdersReducer(
            initialState,
            {
              type: WS_ORDERS_OPEN,
            },
        )
    ).toEqual({
      ...initialState,
      wsConnecting: false,
      wsConnected: true,
    });
  });

  it('should return close state', () => {
    expect(
        wsOrdersReducer(
            initialState,
            {
              type: WS_ORDERS_CLOSE,
            },
        )
    ).toEqual({
      ...initialState,
      wsConnecting: false,
      wsConnected: false,
    });
  });

  it('should return message state', () => {
    expect(
        wsOrdersReducer(
            initialState,
            {
              type: WS_ORDERS_MESSAGE,
              data: testOrderList,
            },
        )
    ).toEqual({
      ...initialState,
      data: testOrderList,
    });
  });

  it('should return error state', () => {
    expect(
        wsOrdersReducer(
            initialState,
            {
              type: WS_ORDERS_ERROR,
              error: 'testError',
            }
        )
    ).toEqual({
      ...initialState,
      error: 'testError',
    })
  });

});
