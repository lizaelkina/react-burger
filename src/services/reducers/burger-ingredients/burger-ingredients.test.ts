import {burgerIngredientsReducer, initialState} from './burger-ingredients';
import {
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_LOADING,
  GET_INGREDIENTS_SUCCESS,
  selectIngredientGroup
} from '../../actions/burger-ingredients';
import {IIngredient} from '../../../utils/data-types';

describe('check burger-ingredients reducer', () => {
  it('should return initial state', () => {
    expect(burgerIngredientsReducer(undefined, {} as any)).toEqual(initialState);
  });

  it('should return loading state', () => {
    expect(
        burgerIngredientsReducer(
            initialState,
            {
              type: GET_INGREDIENTS_LOADING
            }
        )
    ).toEqual({
      ...initialState,
      isLoading: true,
      error: null,
    });
  });

  it('should return success state', () => {
    const ingredients: IIngredient[] = [];
    expect(
        burgerIngredientsReducer(
            initialState,
            {
              type: GET_INGREDIENTS_SUCCESS,
              ingredients: ingredients
            }
        )
    ).toEqual({
      ...initialState,
      isLoading: false,
      ingredients: [...ingredients],
    });
  });

  it('should return failed state', () => {
    const error = 'error';
    expect(
        burgerIngredientsReducer(
            initialState,
            {
              type: GET_INGREDIENTS_FAILED,
              error: error
            }
        )
    ).toEqual({
      ...initialState,
      isLoading: false,
      error: error,
    });
  });

  it('should return select group state', () => {
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