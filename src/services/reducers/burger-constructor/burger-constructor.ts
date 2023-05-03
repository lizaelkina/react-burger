import {v4 as uuidv4} from 'uuid';
import {
  ADD_INGREDIENT,
  CLEAR_INGREDIENTS,
  DELETE_INGREDIENT,
  MOVE_INGREDIENT,
  TBurgerConstructorActions
} from '../../actions/burger-constructor';
import {IIngredient} from '../../../utils/data-types';

type TBurgerConstructorState = {
  bun: IIngredient | null;
  middle: IIngredient[];
}

export const initialState: TBurgerConstructorState = {
  bun: null,
  middle: [],
}

export const burgerConstructorReducer = (state = initialState, action: TBurgerConstructorActions): TBurgerConstructorState => {
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
    case MOVE_INGREDIENT: {
      const toIndex = state.middle.findIndex(item => item.uuid === action.toUUID);
      const fromIndex = state.middle.findIndex(item => item.uuid === action.fromUUID);
      const fromElement = state.middle[fromIndex];

      const result = [...state.middle];
      result.splice(fromIndex, 1);
      result.splice(toIndex, 0, fromElement);

      return {
        ...state,
        middle: result
      }
    }
    default: {
      return state;
    }
  }
}
