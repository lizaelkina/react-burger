import {initialState, wsOrdersReducer} from './orders';

describe('Check orders reducer', () => {
  test('Should return initial state', () => {
    expect(wsOrdersReducer(undefined, {} as any)).toEqual(initialState);
  });
});
