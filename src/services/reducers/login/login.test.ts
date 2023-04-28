import {createLoginReducer, initialState} from './login';

describe('Check login reducer', () => {
  test('Should return initial state', () => {
    expect(createLoginReducer(undefined, {} as any)).toEqual(initialState);
  });
});
