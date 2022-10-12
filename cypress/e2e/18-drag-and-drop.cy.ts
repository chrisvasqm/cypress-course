Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("Demo QA - Drag and Drop", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/droppable`);
  });

  it("Drag and drop an element to another", () => {
    cy.get("div#draggable").drag("div#droppable", { force: true });
    cy.contains("div#droppable > p", "Dropped!").should("exist");
    cy.get("div#droppable").should(
      "have.css",
      "background-color",
      "rgb(70, 130, 180)"
    );
  });
});
