/// <reference types="Cypress" />

import { TEST_VALID_CREDENTIALS } from '../../constants/global-consts';
import { LOGIN_SUBMIT_BUTTON, PASSWORD_INPUT, USERNAME_INPUT } from '../../constants/login-consts';
import { DETAILS_BUTTON, EMPTY_PRODUCT_LIST_TXT, PRODUCT_DIALOG, SEARCH_INPUT } from '../../constants/products-consts';
import { NavigationMenu } from '../../pages/Navigation';

describe('HomePage should', () => {
  beforeEach(() => {
    cy.visit(Cypress.env().baseUrl);

    cy.get(USERNAME_INPUT).should('be.empty').type(TEST_VALID_CREDENTIALS.username).blur();
    cy.get(PASSWORD_INPUT).should('be.empty').type(TEST_VALID_CREDENTIALS.username).blur();
    cy.get(LOGIN_SUBMIT_BUTTON).click();

    cy.location().should((loc) => {
      expect(loc.href).to.eq(NavigationMenu.homeLink);
    });
  });

  it('display product details', () => {
    cy.get(DETAILS_BUTTON).click();
    cy.get(PRODUCT_DIALOG).should('exist');
  });

  it('display empty product list', () => {
    let randomFilterQuery = 'fdjoisfjdoisfjoas';
    cy.get(SEARCH_INPUT).should('be.empty').type(randomFilterQuery);
    cy.get(EMPTY_PRODUCT_LIST_TXT).should('exist');
  });

  it('display 8 items in lg screen', () => {
    cy.viewport(1300, 800);
    cy.get('.product').should('have.length', 8);
  });

  it('display 4 items in xs screen', () => {
    cy.viewport(500, 800);
    cy.get('.product').should('have.length', 4);
  });
});
