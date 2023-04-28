import {burgerIngredientsReducer, initialState} from './burger-ingredients';

describe('Check burger-ingredients reducer', () => {
  test('Should return initial state', () => {
    expect(burgerIngredientsReducer(undefined, {} as any)).toEqual(initialState);
  });
});
