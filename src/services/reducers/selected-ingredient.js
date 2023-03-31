import {CLEAR_SELECTED_INGREDIENT, SELECT_INGREDIENT} from '../actions/selected-ingredient';

const initialState = {
  ingredient: null,
};

export const selectedIngredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_INGREDIENT: {
      return {
        ...state,
        ingredient: action.ingredient,
      }
    }
    case CLEAR_SELECTED_INGREDIENT: {
      return {
        ...state,
        ingredient: null,
      }
    }
    default: {
      return state;
    }
  }
};
