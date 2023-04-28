import {
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_LOADING,
  GET_INGREDIENTS_SUCCESS,
  SELECT_INGREDIENT_GROUP,
  TBurgerIngredientsActions
} from '../../actions/burger-ingredients';
import {IIngredient} from '../../../utils/data-types';

type TBurgerIngredientsState = {
  ingredients: Array<IIngredient>;
  isLoading: boolean;
  error: string | null;
  selectedGroup: string;
}

export const initialState: TBurgerIngredientsState = {
  ingredients: [],
  isLoading: false,
  error: null,
  selectedGroup: 'bun',
}

export const burgerIngredientsReducer = (state = initialState, action: TBurgerIngredientsActions): TBurgerIngredientsState => {
  switch (action.type) {
    case GET_INGREDIENTS_LOADING: {
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        ingredients: action.ingredients,
      }
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    }
    case SELECT_INGREDIENT_GROUP: {
      return {
        ...state,
        selectedGroup: action.group,
      }
    }
    default: {
      return state;
    }
  }
}
