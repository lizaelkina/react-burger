import {createAuthReducer, initialState} from './auth';

describe('Check auth reducer', () => {
  test('Should return initial state', () => {
    expect(createAuthReducer(undefined, {} as any)).toEqual(initialState);
  });
});
