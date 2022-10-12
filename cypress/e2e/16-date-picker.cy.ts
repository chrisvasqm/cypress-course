Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("Date Picker Example", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/date-picker`);
  });

  it("Choosing a date", () => {
    cy.get("input#datePickerMonthYearInput").click();
    cy.get("select.react-datepicker__month-select").select("0");
    cy.get("select.react-datepicker__year-select").select("1900");
    cy.findByText("16").click();
    cy.get("input#datePickerMonthYearInput").should("have.value", "01/16/1900");
  });
});
