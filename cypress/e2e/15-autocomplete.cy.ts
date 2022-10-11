Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("Autocomplete Example", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/auto-complete`);
  });

  it("Working with Autocomplete inputs", () => {
    cy.get(
      "#autoCompleteMultipleContainer > .auto-complete__control > .auto-complete__value-container"
    ).type("y");

    cy.get("#react-select-2-option-0").click();

    cy.get(
      "#autoCompleteMultipleContainer > .auto-complete__control > .auto-complete__value-container"
    ).should("have.text", "Yellow");
  });
});
