describe("Spec 1", () => {
  beforeEach(() => {
    cy.log("Before each hook");
  });

  afterEach(() => {
    cy.log("After each hook");
  });

  it("Test Case 1", () => {
    cy.log("Hello world");
  });

  it("Test Case 2", () => {
    cy.log("Hello world");
  });
});
