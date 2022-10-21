describe('Environment Variables', () => {
    it('Display environment variables', () => {
        cy.log(`Message: ${Cypress.env("message")}`)
    });
});