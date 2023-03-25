import {
  CLEAR_SELECTED_INGREDIENT,
  INGREDIENTS_LOADED,
  SELECT_INGREDIENT,
  SELECT_INGREDIENT_GROUP
} from '../actions/burger-ingredients';

const initialState = {
  ingredients: [],
  selectedGroup: 'bun',
  selectedIngredient: null,
};

export const burgerIngredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INGREDIENTS_LOADED: {
      return {
        ...state,
        ingredients: action.ingredients,
      };
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
