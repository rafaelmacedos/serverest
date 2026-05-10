const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  e2e: {
    specPattern: "cypress/e2e/web/**/*.cy.js",
    supportFile: "cypress/support/web.js",
    setupNodeEvents(on, config) {
      config.baseUrl = config.env.web_app_url;
      require("@shelex/cypress-allure-plugin/writer")(on, config);
      config.expose = { ...(config.expose || {}), ...config.env };
      return config;
    },
  },
});
