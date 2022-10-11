Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("Demo QA - Uploading Files", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/upload-download`);
  });

  it("Upload a file", () => {
    cy.get("#uploadFile").attachFile("example.json");
    cy.get("#uploadedFilePath").should(
      "have.text",
      `C:\\fakepath\\example.json`
    );
  });
});
