import {GET_INGREDIENTS_SUCCESS} from '../actions/burger-ingredients';

const initialState = {
  ingredients: [],
}

export const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_SUCCESS: {
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
