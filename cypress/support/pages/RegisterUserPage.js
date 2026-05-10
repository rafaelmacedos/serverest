const RegisterUserPage = {
  url: "/cadastrarusuarios",

  elements: {
    name: () => cy.get("[data-testid=nome]"),
    email: () => cy.get("[data-testid=email]"),
    password: () => cy.get("[data-testid=password]"),
    isAdmin: () => cy.get("[data-testid=checkbox]"),
    registerButton: () => cy.get("[data-testid=cadastrar]"),
  },

  visit() {
    cy.visit(this.url);
  },

  register({ name, email, password, admin = false }) {
    this.elements.name().type(name);
    this.elements.email().type(email);
    this.elements.password().type(password, { log: false });
    if (admin) this.elements.isAdmin().check();
    this.elements.registerButton().click();
  },
};

export default RegisterUserPage;
