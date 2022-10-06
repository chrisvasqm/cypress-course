describe("basics", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("uitestplayground")}/textinput`);
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

  it("title validation", () => {
    cy.title().then((title) => {
      expect(title).to.be.equal("Text Input");
    });
  });

  it("text input challenge", () => {
    const expected = "MESSAGE";
    cy.get("input#newButtonName").type(expected);
    cy.get("button#updatingButton").click().should("have.text", expected);
  });
});
