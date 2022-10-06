import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://uitestingplayground.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      message: "This is the environment variable",
      uitestplayground: "http://uitestingplayground.com",
      demoQA: "https://demoqa.com",
      internetapp: "https://the-internet.herokuapp.com/"
    },
  },
});
