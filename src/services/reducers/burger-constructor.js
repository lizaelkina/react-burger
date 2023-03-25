import {INGREDIENTS_LOADED} from '../actions/burger-ingredients';

const initialState = {
  ingredients: [],
}

export const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case INGREDIENTS_LOADED: {
      return {
        ...state,
        ingredients: action.ingredients,
      }
    }
    default: {
      return state;
    }
  }
};
