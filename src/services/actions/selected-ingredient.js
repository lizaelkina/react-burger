export const SELECT_INGREDIENT = 'SELECT_INGREDIENT';
export const CLEAR_SELECTED_INGREDIENT = 'CLEAR_SELECTED_INGREDIENT';

export function selectIngredient(ingredient) {
  return {
    type: SELECT_INGREDIENT,
    ingredient,
  }
}

export function clearSelectedIngredient() {
  return {
    type: CLEAR_SELECTED_INGREDIENT,
  }
}
