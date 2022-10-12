import Login from "../pom/Login";

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("POM vs Custom Commands", () => {
  const login = new Login();

  beforeEach(() => {
    login.visit();
  });

  it("Login using Page Object Model", () => {
    const profile = login.signIn("test", "Test1234*");
    profile.header.should("have.text", "Profile");
  });

  it("Login using Custom Commands", () => {
    cy.get("#userName").type("test");
    cy.get("#password").type("Test1234*");
    cy.get("#login").click();
    cy.get("div.main-header").should("have.text", "Profile");
  });
});
