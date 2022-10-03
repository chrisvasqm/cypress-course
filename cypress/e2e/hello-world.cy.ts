describe("empty spec", () => {
  it("passes", () => {
    cy.log("Hello world");
  });

  it("variables", () => {
    let name: string = "Christian";
    let age: number = 28;
    const isAdult = age >= 18;
    const anything: any = "Anything" + 1;

    cy.log(name);
    cy.log(age);
    cy.log(isAdult);
    cy.log(anything);
  });

  it("functions", () => {
    const add = (a: number, b: number): number => {
      return a + b;
    };

    cy.log(add(2, 3).toString());
  });
});
