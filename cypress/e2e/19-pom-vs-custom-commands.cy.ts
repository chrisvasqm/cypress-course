Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("POM vs Custom Commands", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/login`);
  });

  it("Login using Page Object Model", () => {
    cy.get("#userName").type("test");
    cy.get("#password").type("Test1234*");
    cy.get("#login").click();
    cy.get("div.main-header").should("have.text", "Profile");
  });

  it("Login using Custom Commands", () => {
    cy.get("#userName").type("test");
    cy.get("#password").type("Test1234*");
    cy.get("#login").click();
    cy.get("div.main-header").should("have.text", "Profile");
  });
});
