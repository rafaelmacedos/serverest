import { generateNewProduct, productToApiPayload  } from "../../support/factories/product";
import { generateNewUser, userToApiPayload } from "../../support/factories/user";

describe("/produtos", () => {
  before(() => {
    const newUser = generateNewUser(true);

    cy.request("POST", "/usuarios", userToApiPayload(newUser)).then((response) => {
      expect(response.status).to.eq(201);
      cy.apiLogin(newUser.email, newUser.password).then((loginResponse) => {
        expect(loginResponse.status).to.eq(200);
        cy.wrap(loginResponse.body.authorization).as("authToken");
      });
    });
  });

  it("should create a new product and retrieve it successfully", function () {
    const newProduct = generateNewProduct();

    cy.request({
      method: "POST",
      url: "/produtos",
      headers: { Authorization: this.authToken },
      body: productToApiPayload(newProduct),
    }).then((response) => {
      expect(response.status).to.eq(201);
      const productId = response.body._id;

      cy.request("GET", `/produtos/${productId}`).then((getResponse) => {
        expect(getResponse.status).to.eq(200);
        expect(getResponse.body).to.have.property("nome", newProduct.name);
        expect(getResponse.body).to.have.property("descricao", newProduct.description);
        expect(getResponse.body).to.have.property("preco", newProduct.price);
        expect(getResponse.body).to.have.property("quantidade", newProduct.quantity);
      });
    });
  });

  it("should return 404 for a non-existent product", () => {
    const nonExistentProductId = "abcdef1234567890";

    cy.request({
      method: "GET",
      url: `/produtos/${nonExistentProductId}`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property("message", "Produto não encontrado");
    });

  });
});
