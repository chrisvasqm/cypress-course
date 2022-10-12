Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("Demo QA - Tooltips", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/tool-tips`);
  });

  it("Button with Tooltip", () => {
    cy.get("button#toolTipButton").realHover();
    cy.get(".tooltip-inner").should("have.text", "You hovered over the Button");
  });

  it("Text with hover", () => {
    cy.contains("a", "Contrary").realHover();
    cy.get(".tooltip-inner").should(
      "have.text",
      "You hovered over the Contrary"
    );
  });
});
