Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe.skip("Demo QA - Links and Tabs", () => {
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

describe("Demo QA - Intercepting API Requests", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/links`);
    cy.intercept("GET", `${Cypress.env("demoQA")}/created`).as("linkStatus");
  });

  it("201 Created", () => {
    cy.get("#created").click();
    cy.wait("@linkStatus").then((request) => {
      expect(request.response?.statusCode).to.be.equal(201);
      expect(request.response?.statusMessage).to.be.equal("Created");
    });
  });
});
