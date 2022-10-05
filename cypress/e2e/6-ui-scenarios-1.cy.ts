describe("UI Scenarios 1", () => {
  beforeEach(() => {
    cy.visit("/click");
  });

  it("click assertion", () => {
    cy.get("#badButton").click().should("have.class", "btn-success");
  });

  it("background color assertion", () => {
    cy.get("#badButton")
      .click()
      .should("have.css", "background-color", "rgb(40, 167, 69)");
  });
});
