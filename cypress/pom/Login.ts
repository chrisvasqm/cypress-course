import Profile from "./Profile";

export default class Login {
  visit() {
    cy.visit(`${Cypress.env("demoQA")}/login`);
  }

  signIn(username: string, password: string) {
    cy.get("#userName").type(username);
    cy.get("#password").type(password);
    cy.get("#login").click();

    return new Profile();
  }
}
