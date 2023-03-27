export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const CLEAR_INGREDIENTS = 'CLEAR_INGREDIENTS';

export function addIngredient(ingredient) {
  return {
    type: ADD_INGREDIENT,
    ingredient,
  }
}

export function deleteIngredient(ingredient) {
  return {
    type: DELETE_INGREDIENT,
    ingredient,
  }
}

export function clearIngredients() {
  return {
    type: CLEAR_INGREDIENTS,
  }
}
