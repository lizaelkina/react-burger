import {createRegisterReducer, initialState} from './register';

describe('Check register reducer', () => {
  test('Should return initial state', () => {
    expect(createRegisterReducer(undefined, {} as any)).toEqual(initialState);
  });
});
