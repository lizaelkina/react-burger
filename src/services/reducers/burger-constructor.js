import {ADD_INGREDIENT} from '../actions/burger-constructor';

const initialState = {
  bun: null,
  middle: [],
}

export const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      if (action.ingredient.type === 'bun') {
        return {
          ...state,
          bun: action.ingredient,
        }
      } else {
        return {
          ...state,
          middle: [
            ...state.middle,
            action.ingredient
          ],
        }
      }
    }
    default: {
      return state;
    }
  }
};
