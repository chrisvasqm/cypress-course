describe("JavaScript and TypeScript Basics", () => {
  it("Logging a message", () => {
    cy.log("Hello world");
  });

  it("Variables and Constants", () => {
    let name: string = "Christian";
    let age: number = 28;
    const isAdult = age >= 18;
    const anything: any = "Anything" + 1;

    cy.log(name);
    cy.log(`${age}`);
    cy.log(`${isAdult}`);
    cy.log(anything);
  });

  it("Functions", () => {
    const add = (a: number, b: number): number => {
      return a + b;
    };

    function subsctract(a: number, b: number): number {
      return a - b;
    }

    cy.log(add(2, 3).toString());
    cy.log(subsctract(2, 2).toString());
  });

  it("Objects", () => {
    interface User {
      username: string;
      password: string;
    }

    function login(user: User) {
      cy.log(`${user.username} ${user.password}`);
    }

    login({ username: "John", password: "Doe" });
  });
});
