import {API_URL} from '../../src/utils/api';
import {createTestIngredient} from '../../src/utils/data-test';

describe('burger constructor', () => {

  beforeEach(() => {
    cy.viewport(1300, 800);
    cy.visit('/');
    getModal().should('not.exist');
  })

  const getModal = () => cy.get('[class^=modal_modal__]');

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
    // const ingredientCard = getModal().find('[class^=ingredient-details_card__]');

    // ingredientCard.first().within(() => {
    //   cy.get('h3').contains('name');
    //   let details = cy.get('[class^=ingredient-details_card__compound__]');
    //   details.should('have.length', 4);
    //   details.eq(0).find('span').contains('10');
    //   details.eq(1).find('span').contains('10');
    //   details.eq(2).find('span').contains('10');
    //   details.eq(3).find('span').contains('10');
    // });

  });

});
