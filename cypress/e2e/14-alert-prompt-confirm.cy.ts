describe("The Internet - JS Alert, Prompt and Confirm Examples", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("internetapp")}/javascript_alerts`);
  });

  it("Alerts", () => {
    cy.contains("button", "Click for JS Alert").click();
    cy.on("window:alert", (message) => {
      expect(message).to.be.equal("I am a JS Alert");
    });
    cy.on("window:confirm", () => true);
    cy.get("#result").should("have.text", "You successfully clicked an alert");
  });

  it("Confirm - Accept", () => {
    cy.contains("button", "Click for JS Confirm").click();
    cy.on("window:confirm", (message) => {
      expect(message).to.be.equal("I am a JS Confirm");
    });
    cy.on("window:confirm", () => true);
    cy.get("#result").should("have.text", "You clicked: Ok");
  });

  it("Confirm - Cancel", () => {
    cy.contains("button", "Click for JS Confirm").click();
    cy.on("window:confirm", (message) => {
      expect(message).to.be.equal("I am a JS Confirm");
    });
    cy.on("window:confirm", () => false);
    cy.get("#result").should("have.text", "You clicked: Cancel");
  });

  it("Prompt", () => {
    cy.window().then((window) => {
      cy.stub(window, "prompt").returns("Message from the Prompt alert");
      cy.contains("button", "Click for JS Prompt").click();
    });
    cy.get("#result").should(
      "have.text",
      "You entered: Message from the Prompt alert"
    );
  });
});
