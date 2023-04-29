import {burgerIngredientsReducer, initialState} from './burger-ingredients';
import {
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_LOADING,
  GET_INGREDIENTS_SUCCESS,
  selectIngredientGroup
} from '../../actions/burger-ingredients';
import {IIngredient} from '../../../utils/data-types';

const testIngredient: IIngredient = {
  _id: '_id',
  name: 'name',
  type: 'bun',
  proteins: 10,
  fat: 10,
  carbohydrates: 10,
  calories: 100,
  price: 1000,
  image: 'image',
  image_mobile: 'image_mobile',
  image_large: 'image_large',
  __v: 0,
}

describe('check burger-ingredients reducer', () => {
  it('should return initial state', () => {
    expect(burgerIngredientsReducer(undefined, {} as any)).toEqual(initialState);
  });

  it('should return loading state', () => {
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

  it('should return success state', () => {
    expect(
        burgerIngredientsReducer(
            initialState,
            {
              type: GET_INGREDIENTS_SUCCESS,
              ingredients: [testIngredient],
            }
        )
    ).toEqual({
      ...initialState,
      isLoading: false,
      ingredients: [testIngredient],
    });
  });

  it('should return failed state', () => {
    expect(
        burgerIngredientsReducer(
            initialState,
            {
              type: GET_INGREDIENTS_FAILED,
              error: 'error',
            }
        )
    ).toEqual({
      ...initialState,
      isLoading: false,
      error: 'error',
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
