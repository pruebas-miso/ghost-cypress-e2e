/// <reference types="cypress" />

export class LoginPage {

    url  = Cypress.config("baseUrl");
    user = Cypress.config("ghostUser");
    pass = Cypress.config("ghostPass");;

    loginAndGoToDashBoard() {
      cy.visit(this.url);
      cy.get(".email.ember-text-field.gh-input.ember-view").type(
        this.user
      );
      cy.get(".password.ember-text-field.gh-input.ember-view").type(
        this.pass
      );
      cy.get("#ember12 > span").click();
    }
  
  }
  