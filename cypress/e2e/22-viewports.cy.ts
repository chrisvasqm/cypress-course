describe("Working with multiple viewports", () => {
  const devices: Cypress.ViewportPreset[] = [
    "iphone-x",
    "ipad-2",
    "macbook-15",
  ];

  devices.forEach((device) => {
    it(`Testing on ${device}`, () => {
      cy.viewport(device);
      cy.visit("/click");
    });
  });
});
