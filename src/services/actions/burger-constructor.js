export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export function addIngredient(ingredient) {
  return {
    type: ADD_INGREDIENT,
    ingredient,
  }
}
