describe("basics", () => {
  beforeEach(() => {
    cy.visit("/textinput");
  });
  it("visit 1", () => {
    cy.log("First visit");
  });

  it("visit 2", () => {
    cy.log("Second visit");
  });
});
