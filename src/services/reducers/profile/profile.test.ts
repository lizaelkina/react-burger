import {initialState, profileReducer} from './profile';

describe('Check profile reducer', () => {
  test('Should return initial state', () => {
    expect(profileReducer(undefined, {} as any)).toEqual(initialState);
  });
});
