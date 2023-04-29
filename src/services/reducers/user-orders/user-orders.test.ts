import {initialState, wsUserOrdersReducer} from './user-orders';
import {
  WS_USER_ORDERS_CLOSE,
  WS_USER_ORDERS_ERROR,
  WS_USER_ORDERS_MESSAGE,
  WS_USER_ORDERS_OPEN,
  wsUserOrdersConnect
} from '../../actions/user-orders';

function createOrder(id: string, number: number) {
  return {
    _id: id,
    ingredients: [],
    status: 'status',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    number: number,
  };
}

describe('check user-orders reducer', () => {
  it('should return initial state', () => {
    expect(wsUserOrdersReducer(undefined, {} as any)).toEqual(initialState);
  });

  it('should return connect state', () => {
    expect(
        wsUserOrdersReducer(
            initialState,
            wsUserOrdersConnect('', true),
        )
    ).toEqual({
      ...initialState,
      wsConnecting: true,
      wsConnected: false,
    });
  });

  it('should return open state', () => {
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

  it('should return close state', () => {
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

  it('should return message state', () => {
    expect(
        wsUserOrdersReducer(
            initialState,
            {
              type: WS_USER_ORDERS_MESSAGE,
              data: {
                orders: [
                  createOrder('1', 1),
                  createOrder('2', 2),
                  createOrder('3', 3),
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
          createOrder('3', 3),
          createOrder('2', 2),
          createOrder('1', 1),
        ],
        success: false,
        total: 0,
        totalToday: 0
      },
    });
  });

  it('should return error state', () => {
    expect(
        wsUserOrdersReducer(
            initialState,
            {
              type: WS_USER_ORDERS_ERROR,
              error: 'testError',
            }
        )
    ).toEqual({
      ...initialState,
      error: 'testError',
    });
  });

});
