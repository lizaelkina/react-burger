import {API_URL} from '../../src/utils/api';
import {createTestIngredient, testLargeIngredientImage} from '../../src/utils/data-test';

describe('burger constructor', () => {

  beforeEach(() => {
    cy.viewport(1300, 800);
    cy.visit('/');
    getModal().should('not.exist');
  })

  const getModal = () => cy.get('[class^=modal_modal__]');
  const getIngredientsContainer = () => cy.get('[class^=burger-ingredients_section__]');
  const getDropContainer = () => cy.get('[class^=burger_order__]');

  it('should open ingredient modal', () => {
    cy.intercept(`${API_URL}/ingredients`).as('api.ingredients');
    cy.get('[class^=burger-ingredient_link__]').first().click();
    cy.wait('@api.ingredients');
    getModal().should('be.visible');
  })

  it('should display ingredient details', () => {
    const mockIngredients = {
      success: true,
      data: [createTestIngredient('1', 'bun')],
    };
    cy.intercept(`${API_URL}/ingredients`, mockIngredients).as('api.ingredients');
    cy.get('[class^=burger-ingredient_link__]').first().click();
    cy.wait('@api.ingredients');
    getModal().should('be.visible');
    getModal().find('[class^=ingredient-details_card__image__]').first().should('have.attr', 'src', testLargeIngredientImage);
    getModal().find('[data-cy=ingredientName]').contains('Название ингредиента');
    getModal().find('[data-cy=ingredientCalories]').contains('100');
    getModal().find('[data-cy=ingredientProteins]').contains('90');
    getModal().find('[data-cy=ingredientFat]').contains('80');
    getModal().find('[data-cy=ingredientCarbohydrates]').contains('70');
  });

  it('should drag&drop', () => {
    cy.intercept(`${API_URL}/ingredients`).as('api.ingredients');
    getIngredientsContainer().contains('Соус фирменный Space Sauce').trigger('dragstart');
    getDropContainer().trigger('drop');
  });

});
