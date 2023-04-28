import {burgerConstructorReducer, initialState} from './burger-constructor';

describe('Check burger-constructor reducer', () => {
  test('Should return initial state', () => {
    expect(burgerConstructorReducer(undefined, {} as any)).toEqual(initialState);
  });
});
