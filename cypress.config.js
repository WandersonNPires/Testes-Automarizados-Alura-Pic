const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require ("cypress");

module.exports = defineConfig({
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor',cucumber())
      {"reporter"; "mochawesome",
      "reporterOptions";
      {"reportDir";"cypress/report/mochawesome-report",
      "overwrite";true,
      "html";true;
      "json"; false;
      "timestamp"; "mmddyyyy_HHMMss"}}
    },
    specPattern: "cypress/e2e/step_definitions/*.feature"
  },
});