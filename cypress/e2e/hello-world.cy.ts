describe("empty spec", () => {
  it("passes", () => {
    cy.log("Hello world");
  });

  it("functions", () => {
    const add = (a: number, b: number): number => { return a + b }

    cy.log(add(2, 3).toString());
  });
});
