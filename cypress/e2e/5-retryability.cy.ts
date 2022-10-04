describe("Retryability", () => {
  it("Visit with delay", () => {
    cy.visit("/loaddelay", { timeout: 10000});
  });
});
