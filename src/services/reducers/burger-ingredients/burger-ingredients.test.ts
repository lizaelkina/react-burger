import {burgerIngredientsReducer, initialState} from './burger-ingredients';
import {
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_LOADING,
  GET_INGREDIENTS_SUCCESS,
  selectIngredientGroup
} from '../../actions/burger-ingredients';
import {createTestIngredient, testError} from '../../../utils/data-test';

describe('check burger-ingredients reducer', () => {
  it('should return initial state', () => {
    expect(burgerIngredientsReducer(undefined, {} as any)).toEqual(initialState);
  });

  it('should handle loading action', () => {
    expect(
        burgerIngredientsReducer(
            initialState,
            {
              type: GET_INGREDIENTS_LOADING,
            }
        )
    ).toEqual({
      ...initialState,
      isLoading: true,
      error: null,
    });
  });

  it('should handle success action', () => {
    expect(
        burgerIngredientsReducer(
            initialState,
            {
              type: GET_INGREDIENTS_SUCCESS,
              ingredients: [createTestIngredient('1', 'bun')],
            }
        )
    ).toEqual({
      ...initialState,
      isLoading: false,
      ingredients: [createTestIngredient('1', 'bun')],
    });
  });

  it('should handle failed action', () => {
    expect(
        burgerIngredientsReducer(
            initialState,
            {
              type: GET_INGREDIENTS_FAILED,
              error: testError,
            }
        )
    ).toEqual({
      ...initialState,
      isLoading: false,
      error: testError,
    });
  });

  it('should handle select group action', () => {
    expect(
        burgerIngredientsReducer(
            initialState,
            selectIngredientGroup('bun')
        )
    ).toEqual({
      ...initialState,
      selectedGroup: 'bun',
    });
  });

});
