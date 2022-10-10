Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("Demo QA - Buttons", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/buttons`);
  });

  it("Double click test", () => {
    cy.get("#doubleClickBtn").dblclick();
    cy.get("#doubleClickMessage").should(
      "have.text",
      "You have done a double click"
    );
  });
});
