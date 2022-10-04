describe("Locators", () => {
  beforeEach(() => {
    cy.visit("/dynamicid");
  });

  it("Contains example", () => {
    cy.contains("Button with Dynamic ID").should("exist");
  });
});
