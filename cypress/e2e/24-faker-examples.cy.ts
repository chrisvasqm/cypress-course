import { faker } from "@faker-js/faker";

describe("Faking data with FakerJS", () => {
  it("Create a User with random values", () => {
    const fakeUser = {
      name: faker.name.firstName(),
      lastname: faker.name.lastName(),
      age: faker.random.numeric(),
      email: faker.internet.email(),
      birthdate: faker.date.birthdate(),
    };

    cy.log(
      `Person: ${fakeUser.name} | ${fakeUser.lastname} | ${fakeUser.age} | ${fakeUser.email} | ${fakeUser.birthdate}`
    );
  });
});
