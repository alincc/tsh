import { AppRoute } from '../../../src/routing/routing.model';

class Navigation {
  goToHome(): void {
    cy.get(`a[href*="${AppRoute.HOME}"]`).first().click();
  }

  goToLogin(): void {
    cy.get(`a[href*="${AppRoute.LOGIN}"]`).first().click();
  }

  get homeLink(): string {
    return `${Cypress.env().baseUrl}${AppRoute.HOME}`;
  }

  get loginLink(): string {
    return `${Cypress.env().baseUrl}${AppRoute.LOGIN}`;
  }
}

export const NavigationMenu = new Navigation();
