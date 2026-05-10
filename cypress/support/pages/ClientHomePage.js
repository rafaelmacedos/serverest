const ClientHomePage = {
  url: "/home",

  elements: {
    initialMessage: () => cy.get("[data-testid=home-initial-message]"),
    cartButton: () => cy.get("[data-testid=shopping-cart-button]"),
    productsList: () => cy.get("[data-testid=listaProdutos]"),
    productDetailLink: () => cy.get("[data-testid=product-detail-link]"),
    addToList: () => cy.get("[data-testid=adicionarNaLista]"),
    logoutButton: () => cy.get("[data-testid=logout]"),
  },

  visit() {
    cy.visit(this.url);
  },

  logout() {
    this.elements.logoutButton().click();
  },
};

export default ClientHomePage;
