describe("Spec 1", () => {
  before(() => {
    cy.log("Before hook")
  })

  after(() => {
    cy.log("After hook")
  })

  beforeEach(() => {
    cy.log("Before each hook")
  })

  afterEach(() => {
    cy.log("After each hook")
  })

  it("Test Case 1", () => {
    cy.log("Hello world")
  })

  it("Test Case 2", () => {
    cy.log("Hello world")
  })

  it("Test Case 3", () => {
    cy.log("Hello world")
  })

  it.skip("Test Case 4", () => {
    cy.log("Hello world")
  })
})
