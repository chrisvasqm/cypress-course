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

  it("visit 3", () => {
    cy.url().then((url) => {
      expect(url).to.contains("/textinput");
    });
  });
});
