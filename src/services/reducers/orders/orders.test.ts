import {initialState, wsOrdersReducer} from './orders';
import {
  WS_ORDERS_CLOSE,
  WS_ORDERS_ERROR,
  WS_ORDERS_MESSAGE,
  WS_ORDERS_OPEN,
  wsOrdersConnect
} from '../../actions/orders';
import {testError, testOrderList, testUrl} from '../../../utils/data-test';

describe('check orders reducer', () => {
  it('should return initial state', () => {
    expect(wsOrdersReducer(undefined, {} as any)).toEqual(initialState);
  });

  it('should handle connect action', () => {
    expect(
        wsOrdersReducer(
            initialState,
            wsOrdersConnect(testUrl),
        )
    ).toEqual({
      ...initialState,
      wsConnecting: true,
      wsConnected: false,
    });
  });

  it('should handle open action', () => {
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

  it('should handle close action', () => {
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

  it('should handle message action', () => {
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

  it('should handle error action', () => {
    expect(
        wsOrdersReducer(
            initialState,
            {
              type: WS_ORDERS_ERROR,
              error: testError,
            }
        )
    ).toEqual({
      ...initialState,
      error: testError,
    })
  });

});
