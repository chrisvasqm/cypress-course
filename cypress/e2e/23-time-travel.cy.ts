describe("Cypress Clock and Dates", () => {
  beforeEach(() => {
    const timestamp = new Date(Date.UTC(2019, 9, 7)).getTime();
    cy.clock(timestamp);
    cy.visit("https://example.cypress.io/commands/spies-stubs-clocks");
  });

  it("Travelling to a specific date and validating it", () => {
    cy.get("#clock-div").click().should("have.text", "1570406400");
  });
});
