import { Post } from "./model";

describe("Basic API Testing", () => {
  it("GET Request", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts").then(
      (response) => {
        cy.log("Response:", response);
        expect(response.status).to.be.equal(200);
        expect(response.statusText).to.be.equal("OK");
        expect(response.duration).to.be.lessThan(100);

        const posts = response.body;
        posts.forEach((post: Post) => {
          cy.log(post.title);
        });
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
        cy.log(response);
        expect(response.status).to.be.equal(201);
        expect(response.statusText).to.be.equal("Created");
      }
    );
  });
});
