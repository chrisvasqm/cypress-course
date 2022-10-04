describe("Retryability", () => {
  it("Visit with delay", () => {
    cy.visit("/loaddelay", { timeout: 10000 });
  });

  it("Get element with delay", () => {
    cy.visit("/clientdelay");
    cy.get("#ajaxButton").click();
    cy.get(".bg-success", { timeout: 20000}).should(
      "have.text",
      "Data calculated on the client side."
    );
  });
});
