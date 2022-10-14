import { defineConfig } from "cypress";
const { isFileExist, findFiles } = require("cy-verify-downloads");

export default defineConfig({
  e2e: {
    baseUrl: "http://uitestingplayground.com",
    setupNodeEvents(on, config) {
      on("task", { isFileExist, findFiles });
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    env: {
      message: "This is the environment variable",
      uitestplayground: "http://uitestingplayground.com",
      demoQA: "https://demoqa.com",
      internetapp: "https://the-internet.herokuapp.com",
    },
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      charts: true,
      reportPageTitle: "Udemy Cypress Course",
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    video: false,
    screenshotOnRunFailure: true,
  },
});
