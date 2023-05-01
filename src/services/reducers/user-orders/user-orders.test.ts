import {initialState, wsUserOrdersReducer} from './user-orders';
import {
  WS_USER_ORDERS_CLOSE,
  WS_USER_ORDERS_ERROR,
  WS_USER_ORDERS_MESSAGE,
  WS_USER_ORDERS_OPEN,
  wsUserOrdersConnect
} from '../../actions/user-orders';
import {createOrder, testError, testUrl} from '../../../utils/data-test';

describe('check user-orders reducer', () => {
  it('should return initial state', () => {
    expect(wsUserOrdersReducer(undefined, {} as any)).toEqual(initialState);
  });

  it('should handle connect action', () => {
    expect(
        wsUserOrdersReducer(
            initialState,
            wsUserOrdersConnect(testUrl, true),
        )
    ).toEqual({
      ...initialState,
      wsConnecting: true,
      wsConnected: false,
    });
  });

  it('should handle open action', () => {
    expect(
        wsUserOrdersReducer(
            initialState,
            {
              type: WS_USER_ORDERS_OPEN,
            },
        )
    ).toEqual({
      ...initialState,
      wsConnecting: false,
      wsConnected: true,
    });
  });

  it('should handle close action', () => {
    expect(
        wsUserOrdersReducer(
            initialState,
            {
              type: WS_USER_ORDERS_CLOSE,
            },
        )
    ).toEqual({
      ...initialState,
      wsConnecting: false,
      wsConnected: false,
    });
  });

  it('should handle message action', () => {
    expect(
        wsUserOrdersReducer(
            initialState,
            {
              type: WS_USER_ORDERS_MESSAGE,
              data: {
                orders: [
                  createOrder('1'),
                  createOrder('2'),
                  createOrder('3'),
                ],
                success: false,
                total: 0,
                totalToday: 0
              },
            },
        )
    ).toEqual({
      ...initialState,
      data: {
        orders: [
          createOrder('3'),
          createOrder('2'),
          createOrder('1'),
        ],
        success: false,
        total: 0,
        totalToday: 0
      },
    });
  });

  it('should handle error action', () => {
    expect(
        wsUserOrdersReducer(
            initialState,
            {
              type: WS_USER_ORDERS_ERROR,
              error: testError,
            }
        )
    ).toEqual({
      ...initialState,
      error: testError,
    });
  });

});
