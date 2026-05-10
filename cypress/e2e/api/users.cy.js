import { generateNewUser, userToApiPayload } from "../../support/factories/user";

describe("/usuarios", () => {
  it("should create a new user and retrieve it successfully", () => {
    const newUser = generateNewUser();

    cy.request("POST", "/usuarios", userToApiPayload(newUser)).then((response) => {
      expect(response.status).to.eq(201);
      const userId = response.body._id;

      cy.request("GET", `/usuarios/${userId}`).then((getResponse) => {
        expect(getResponse.status).to.eq(200);
        expect(getResponse.body).to.have.property("nome", newUser.name);
        expect(getResponse.body).to.have.property("email", newUser.email);
      });
    });
  });

  it("should return 404 for a non-existent user", () => {
    const nonExistentUserId = "abcdef1234567890";

    cy.request({
      method: "GET",
      url: `/usuarios/${nonExistentUserId}`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property("message", "Usuário não encontrado");
    });

  });
});
