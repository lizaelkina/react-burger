export const INGREDIENTS_LOADED = 'INGREDIENTS_LOADED';
export const SELECT_INGREDIENT_GROUP = 'SELECT_INGREDIENT_GROUP';
export const SELECT_INGREDIENT = 'SELECT_INGREDIENT';
export const CLEAR_SELECTED_INGREDIENT = 'CLEAR_SELECTED_INGREDIENT';

export function ingredientsLoaded(ingredients) {
  return {
    type: INGREDIENTS_LOADED,
    ingredients,
  }
}

export function selectIngredientGroup(group) {
  return {
    type: SELECT_INGREDIENT_GROUP,
    group,
  }
}

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
