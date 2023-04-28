import {createOrderReducer, initialState} from './create-order';

describe('Check create-order reducer', () => {
  test('Should return initial state', () => {
    expect(createOrderReducer(undefined, {} as any)).toEqual(initialState);
  });
});
