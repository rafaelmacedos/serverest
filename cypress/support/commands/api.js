Cypress.Commands.add("apiLogin", (email, password) => {
  return cy.request("POST", "/login", { email, password });
});
