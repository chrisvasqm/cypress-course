describe("Locators", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("uitestplayground")}/dynamicid`);
  });

  it("Contains example", () => {
    cy.contains("Button with Dynamic ID").should("exist");
  });
});
