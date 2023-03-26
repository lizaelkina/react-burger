export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';

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
