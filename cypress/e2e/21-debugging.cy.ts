describe("Debuggign Basics with Cypress", () => {
  beforeEach(() => {
    cy.visit("/click");
  });

  it("Using the Debug function", () => {
    // Open the Browser's DevTools before executing this test
    cy.get("#badButton").debug().click();
    cy.get("#badButton").should("have.class", "btn-success");
  });
});
