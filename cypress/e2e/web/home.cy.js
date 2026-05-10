import LoginPage from "../../support/pages/LoginPage";
import ClientHomePage from "../../support/pages/ClientHomePage";
import RegisterUserPage from "../../support/pages/RegisterUserPage";
import { generateNewUser, userToApiPayload } from "../../support/factories/user";

describe("home", () => {
  const apiUrl = "https://serverest.dev";
  let testUser;
  let testUserId;

  before(() => {
    testUser = generateNewUser(false);
    cy.request("POST", `${apiUrl}/usuarios`, userToApiPayload(testUser)).then((res) => {
      testUserId = res.body._id;
    });
  });

  after(() => {
    if (testUserId) {
      cy.request({
        method: "DELETE",
        url: `${apiUrl}/usuarios/${testUserId}`,
        failOnStatusCode: false,
      });
    }
  });

  it("should login with valid credentials successfully", () => {
    LoginPage.login(testUser.email, testUser.password);
  });

  it("should logout successfully", () => {
    LoginPage.login(testUser.email, testUser.password);
    ClientHomePage.logout();
  });

  it("should not access home page without authentication", () => {
    ClientHomePage.visit();
    cy.url().should("include", "/login");
  });

  it("should register a new user and login successfully", () => {
    const newUser = generateNewUser(false);
    RegisterUserPage.visit();
    RegisterUserPage.register(newUser);
    LoginPage.login(newUser.email, newUser.password);
    cy.url().should("include", "/home");
  });
});
