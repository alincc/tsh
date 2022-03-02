/// <reference types="Cypress" />

import { TEST_VALID_CREDENTIALS } from '../../constants/global-consts';
import {
  ALERT_SNACKBAR,
  LOGIN_SUBMIT_BUTTON,
  PASSWORD_HELPER_TEXT,
  PASSWORD_INPUT,
  USERNAME_HELPER_TEXT,
  USERNAME_INPUT,
} from '../../constants/login-consts';
import { NavigationMenu } from '../../pages/Navigation';

describe('login should ', () => {
  beforeEach(() => {
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
    cy.visit(Cypress.env().baseUrl);
  });

  it('start from login page', () => {
    cy.location().should((loc) => {
      expect(loc.href).to.eq(NavigationMenu.loginLink);
    });
  });

  it('display field error when username is too long', () => {
    cy.get(USERNAME_INPUT).should('be.empty').type('too long username').blur();
    cy.get(USERNAME_HELPER_TEXT).should('have.text', 'Value is too long');
  });

  it('display field error when password is too short', () => {
    cy.get(PASSWORD_INPUT).should('be.empty').type('short').blur();
    cy.get(PASSWORD_HELPER_TEXT).should('have.text', 'Value is too short');
  });

  it('return server error after passing bad credentials', () => {
    cy.get(USERNAME_INPUT).should('be.empty').type('notvalidname').blur();
    cy.get(PASSWORD_INPUT).should('be.empty').type('notvalidusername').blur();
    cy.get(LOGIN_SUBMIT_BUTTON).click();
    cy.get(ALERT_SNACKBAR).should('exist');
  });

  it('successfully login and redirect to main page', () => {
    cy.get(USERNAME_INPUT).should('be.empty').type(TEST_VALID_CREDENTIALS.username).blur();
    cy.get(PASSWORD_INPUT).should('be.empty').type(TEST_VALID_CREDENTIALS.username).blur();
    cy.get(LOGIN_SUBMIT_BUTTON).click();
    cy.location().should((loc) => {
      expect(loc.href).to.eq(NavigationMenu.homeLink);
    });
  });
});
