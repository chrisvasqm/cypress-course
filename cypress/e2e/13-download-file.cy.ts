Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("Demo QA - Downloading Files", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/upload-download`);
  });

  it("Download a file", () => {
    cy.get("a#downloadButton").click();
    cy.verifyDownload("sampleFile.jpeg");
  });
});
