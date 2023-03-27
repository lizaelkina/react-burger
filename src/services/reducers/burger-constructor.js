import {v4 as uuidv4} from 'uuid';
import {ADD_INGREDIENT, CLEAR_INGREDIENTS, DELETE_INGREDIENT} from '../actions/burger-constructor';

const initialState = {
  bun: null,
  middle: [],
}

export const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      const ingredient = {
        ...action.ingredient,
        uuid: uuidv4(),
      }
      if (ingredient.type === 'bun') {
        return {
          ...state,
          bun: ingredient,
        }
      } else {
        return {
          ...state,
          middle: [
            ...state.middle,
            ingredient
          ],
        }
      }
    }
    case DELETE_INGREDIENT: {
      return {
        ...state,
        middle: state.middle.filter(ingredient => ingredient.uuid !== action.ingredient.uuid),
      }
    }
    case CLEAR_INGREDIENTS: {
      return initialState
    }
    default: {
      return state;
    }
  }
};
