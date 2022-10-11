Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

let image: HTMLImageElement;

describe("Demo QA - Broken Images and Links", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/broken`);
  });

  it("Valid Image", () => {
    cy.get(`div > img[src="/images/Toolsqa.jpg"]`)
      .should("be.visible")
      .and(($image) => {
        image = $image[0] as HTMLImageElement;
        expect(image.naturalWidth).to.be.greaterThan(0);
      });
  });

  it("Broken Image", () => {
    cy.get(`div > img[src="/images/Toolsqa_1.jpg"]`)
      .should("be.visible")
      .and(($image) => {
        image = $image[0] as HTMLImageElement;
        expect(image.naturalWidth).to.be.greaterThan(0);
      });
  });
});
