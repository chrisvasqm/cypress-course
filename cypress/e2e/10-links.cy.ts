Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("Demo QA - Links", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/links`);
  });

  it("Validating links with HTML attributes", () => {
    cy.get("#simpleLink").should("have.attr", "href", "https://demoqa.com");
    cy.get("#simpleLink").should("have.attr", "target", "_blank");
  });

  it("Validating links with requests", () => {});
});
