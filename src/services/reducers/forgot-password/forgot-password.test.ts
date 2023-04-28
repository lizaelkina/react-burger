import {createForgotPasswordReducer, initialState} from './forgot-password';

describe('Check forgot-password reducer', () => {
  test('Should return initial state', () => {
    expect(createForgotPasswordReducer(undefined, {} as any)).toEqual(initialState);
  });
});
