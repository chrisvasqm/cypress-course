import { defineConfig } from "cypress";
const { isFileExist, findFiles } = require("cy-verify-downloads");

export default defineConfig({
  e2e: {
    baseUrl: "http://uitestingplayground.com",
    setupNodeEvents(on, config) {
      on("task", { isFileExist, findFiles });
    },
    env: {
      message: "This is the environment variable",
      uitestplayground: "http://uitestingplayground.com",
      demoQA: "https://demoqa.com",
      internetapp: "https://the-internet.herokuapp.com/",
    },
  },
});
