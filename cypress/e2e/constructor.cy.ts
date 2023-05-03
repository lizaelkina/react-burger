import {API_URL, ICreateOrderResponse, IGetIngredientsResponse} from '../../src/utils/api';
import {createTestIngredient, createTestOrder, testLargeIngredientImage} from '../../src/utils/data-test';

describe('burger constructor', () => {

  beforeEach(() => {
    cy.viewport(1300, 800);
    cy.visit('/');
    getModal().should('not.exist');
  });

  const modalIngredientHeader = 'Детали ингредиента';
  const testNameBun = 'Краторная булка N-200i';
  const testNameSauce = 'Соус Spicy-X';
  const testNameMain = 'Биокотлета из марсианской Магнолии';

  const getModal = () => cy.get('[class^=modal_modal__]');
  const getDragContainer = () => cy.get('[class^=burger-ingredients_section__]');
  const getDropContainer = () => cy.get('[class^=burger_order__]');
  const getConstructorContainer = () => cy.get('[class^=burger-constructor_section__]');
  const getCreateOrder = () => getConstructorContainer().find('[class^=button]');
  const getLoginSection = () => cy.get('[class^=login_page__]');

  it('should open ingredient modal', () => {
    cy.intercept(`${API_URL}/ingredients`).as('api.ingredients');
    cy.wait('@api.ingredients');
    cy.get('[class^=burger-ingredient_link__]').first().click();
    getModal().should('be.visible');
  });

  it('should close ingredient modal', () => {
    cy.intercept(`${API_URL}/ingredients`).as('api.ingredients');
    cy.wait('@api.ingredients');
    cy.get('[class^=burger-ingredient_link__]').first().click();
    getModal().should('be.visible');
    getModal().find('[class^=modal_modal__close__]').click();
    getModal().should('not.exist');
  });

  it('should display ingredient details', () => {
    const mockIngredients: IGetIngredientsResponse = {
      success: true,
      data: [createTestIngredient('1', 'bun')],
    };

    cy.intercept(`${API_URL}/ingredients`, mockIngredients).as('api.ingredients');
    cy.wait('@api.ingredients');
    cy.get('[class^=burger-ingredient_link__]').first().click();
    getModal().should('be.visible');
    getModal().find('[data-cy=modalHeader]').should('have.text', modalIngredientHeader);
    getModal().find('[class^=ingredient-details_card__image__]').should('have.attr', 'src', testLargeIngredientImage);
    getModal().find('[data-cy=ingredientName]').should('have.text', 'Название ингредиента');
    getModal().find('[data-cy=ingredientCalories]').should('have.text', '100');
    getModal().find('[data-cy=ingredientProteins]').should('have.text', '90');
    getModal().find('[data-cy=ingredientFat]').should('have.text', '80');
    getModal().find('[data-cy=ingredientCarbohydrates]').should('have.text', '70');
  });

  it('should drag&drop and create order', () => {
    const mockIngredients: IGetIngredientsResponse = {
      success: true,
      data: [
        createTestIngredient('1', 'bun', {name: testNameBun}),
        createTestIngredient('2', 'sauce', {
          name: testNameSauce,
          image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
          price: 500
        }),
        createTestIngredient('3', 'main', {
          name: testNameMain,
          image: 'https://code.s3.yandex.net/react/code/meat-01.png',
          price: 2000
        }),
      ],
    };

    cy.intercept(`${API_URL}/ingredients`, mockIngredients).as('api.ingredients');
    cy.wait('@api.ingredients');
    getDragContainer().contains(testNameBun).trigger('dragstart');
    getDropContainer().trigger('drop');
    getDropContainer().find(`.constructor-element__text:contains(${testNameBun})`).should('have.length', 2);
    getDragContainer().contains(testNameSauce).trigger('dragstart');
    getDropContainer().trigger('drop');
    getDropContainer().contains(testNameSauce);
    getDragContainer().contains(testNameMain).trigger('dragstart');
    getDropContainer().trigger('drop');
    getDropContainer().contains(testNameMain);
    getConstructorContainer().find('[data-cy=priceOrder]').should('have.text', '4500');
    getCreateOrder().click();

    getLoginSection().find('[class^=input__container]').first().click().type('barsa90@list.ru');
    getLoginSection().find('[class^=input__container]').last().click().type('123456');
    cy.intercept(`${API_URL}/auth/login`).as('api.login');
    getLoginSection().find('[class^=button]').first().click();
    cy.wait('@api.login');

    const mockOrder: ICreateOrderResponse = {
      success: true,
      order: createTestOrder('1'),
    };

    cy.intercept(`${API_URL}/orders`, mockOrder).as('api.create-order');
    getCreateOrder().click();
    cy.wait('@api.create-order');
    getModal().find('[data-cy=orderNumber]').should('have.text', '1');
  });

});
