Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("Demo QA - Links", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/links`);
  });

  it("Validating links by attribute ", () => {
    cy.get("#simpleLink").should("have.attr", "href", "https://demoqa.com");
    cy.get("#simpleLink").should("have.attr", "target", "_blank");
  });

  it("Validating links by clicking on it without opening a new tab", () => {
    cy.get("#simpleLink").invoke("removeAttr", "target").click();
    cy.url().then((url) => {
      expect(url).to.be.equal("https://demoqa.com/");
    });
  });
});
