/// <reference types="Cypress" />

import { NavigationMenu } from '../../pages/Navigation';

describe('HomePage should', () => {
  beforeEach(() => {
    cy.visit(Cypress.env().baseUrl);
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
    cy.location().should((loc) => {
      expect(loc.href).to.eq(NavigationMenu.homeLink);
    });
  });

  it('display products details', () => {
    // expect(cy.get(DETAILS_BUTTON).contains('Show details') || cy.get(DETAILS_BUTTON).contains('Unavailable'));
    cy.get('.MuiGrid-root.MuiGrid-item');
  });
});
