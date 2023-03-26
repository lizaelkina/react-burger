import {v4 as uuidv4} from 'uuid';
import {ADD_INGREDIENT} from '../actions/burger-constructor';

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
    default: {
      return state;
    }
  }
};
