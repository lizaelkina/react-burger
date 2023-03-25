import {CLEAR_SELECTED_INGREDIENT, SELECT_INGREDIENT, SELECT_INGREDIENT_GROUP} from '../actions/burger-ingredients';
import {GET_INGREDIENTS_FAILED, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_LOADING} from '../actions/ingredients';

const initialState = {
  ingredients: [],
  isLoading: false,
  error: null,
  selectedGroup: 'bun',
  selectedIngredient: null,
};

export const burgerIngredientsReducer = (state = initialState, action) => {
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
        ingredients: action.ingredients,
        isLoading: false,
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
    case SELECT_INGREDIENT: {
      return {
        ...state,
        selectedIngredient: action.ingredient,
      }
    }
    case CLEAR_SELECTED_INGREDIENT: {
      return {
        ...state,
        selectedIngredient: null,
      }
    }
    default: {
      return state;
    }
  }
};
