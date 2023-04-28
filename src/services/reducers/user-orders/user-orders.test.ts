import {initialState, wsUserOrdersReducer} from './user-orders';

describe('Check user-orders reducer', () => {
  test('Should return initial state', () => {
    expect(wsUserOrdersReducer(undefined, {} as any)).toEqual(initialState);
  });
});
