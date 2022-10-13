import { Person } from "./model";

describe("Fixtures Introduction", () => {
  it("Logging data from a Fixture JSON file", () => {
    cy.fixture("persons").then((people: Array<Person>) => {
      people.forEach((person) => {
        cy.log(`Name: ${person.name} | Age: ${person.age}`);
      });
    });
  });
});
