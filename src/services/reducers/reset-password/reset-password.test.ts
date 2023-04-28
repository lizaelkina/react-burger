import {createResetPasswordReducer, initialState} from './reset-password';

describe('Check reset-password reducer', () => {
  test('Should return initial state', () => {
    expect(createResetPasswordReducer(undefined, {} as any)).toEqual(initialState);
  });
});
