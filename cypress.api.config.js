const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    specPattern: "cypress/e2e/api/**/*.cy.js",
    supportFile: "cypress/support/api.js",
    video: false,
    screenshotOnRunFailure: false,
    setupNodeEvents(on, config) {
      config.baseUrl = config.env.apiUrl;
      return config;
    },
  },
});
