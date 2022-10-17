import { Post } from "./model";

describe("Basic API Testing", () => {
  it("GET Request", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts").then(
      (response) => {
        cy.log("Response:", response);

        expect(response.status).to.be.equal(200);
        expect(response.statusText).to.be.equal("OK");
      }
    );
  });

  it("GET by ID Request", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1").then(
      (response) => {
        cy.log("Response:", response);

        expect(response.status).to.be.equal(200);
        expect(response.statusText).to.be.equal("OK");
        expect(response.body.title).to.be.equal(
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
        );
      }
    );
  });

  it("POST Request", () => {
    const post: Post = {
      userId: 100,
      id: 100,
      title: "Test Title",
      body: "Test body",
    };

    cy.request("POST", "https://jsonplaceholder.typicode.com/posts", post).then(
      (response) => {
        cy.log("Response: ", response);

        expect(response.status).to.be.equal(201);
        expect(response.statusText).to.be.equal("Created");
      }
    );
  });

  it("PUT Request", () => {
    cy.request("PUT", "https://jsonplaceholder.typicode.com/posts/10", {
      title: "test",
    }).then((response) => {
      cy.log("Response: ", response);

      expect(response.status).to.be.equal(200);
      expect(response.statusText).to.be.equal("OK");
    });
  });
});
