Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("Demo QA", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/checkbox`);
  });

  it("Working with difficult Checkboxes", () => {
    cy.get(`input[type="checkbox"]`).click({ force: true });
    cy.get("#result").should(
      "have.text",
      "You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile"
    );
  });
});

describe("The Internet App", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("internetapp")}/checkboxes`);
  });
  it("Is Checkbox checked?", () => {
    cy.get("form#checkboxes input").eq(0).click().should('be.checked');
  });
});
