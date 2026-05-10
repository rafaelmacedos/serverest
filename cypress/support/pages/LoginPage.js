const LoginPage = {
  url: "/login",

  elements: {
    email: () => cy.get("[data-testid=email]"),
    password: () => cy.get("[data-testid=senha]"),
    submitButton: () => cy.get("[data-testid=entrar]"),
    registerLink: () => cy.get("[data-testid=cadastrar]"),
    errorAlert: () => cy.get(".alert"),
  },

  visit() {
    cy.visit(this.url);
  },

  login() {
    cy.env(["userEmail", "userPassword"]).then(({ userEmail, userPassword }) => {
      this.visit();
      this.fillCredentials(userEmail, userPassword);
      this.submit();
    });
  },

  loginAs(email, password) {
    this.visit();
    this.fillCredentials(email, password);
    this.submit();
  },

  fillCredentials(email, password) {
    this.elements.email().type(email);
    this.elements.password().type(password, { log: false });
  },

  submit() {
    this.elements.submitButton().click();
  },

  goToRegister() {
    this.elements.registerLink().click();
  },
};

export default LoginPage;
