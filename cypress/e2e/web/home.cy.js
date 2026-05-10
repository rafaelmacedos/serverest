import LoginPage from "../../support/pages/LoginPage";
import ClientHomePage from "../../support/pages/ClientHomePage";
import RegisterUserPage from "../../support/pages/RegisterUserPage";
import { generateNewUser } from "../../support/factories/user";

describe("home", () => {
  it("should login with valid credentials successfully", () => {
    LoginPage.login();
  });

  it("should logout successfully", () => {
    LoginPage.login();
    ClientHomePage.logout();
  });

  it("should not access home page without authentication", () => {
    ClientHomePage.visit();
    cy.url().should("include", "/login");
  });

  it.only("should register a new user and login successfully", () => {
    const newUser = generateNewUser(false);

    RegisterUserPage.visit();
    RegisterUserPage.register(newUser);

    LoginPage.login(newUser.email, newUser.password);
    cy.url().should("include", "/home");
  });
});
