/// <reference types="cypress" />

export class LoginPage {

    url  = Cypress.config("baseUrl");
    user = Cypress.config("ghostUser");
    pass = Cypress.config("ghostPass");
    version = Cypress.config("versionGhost");
    takeScreenshoot = Cypress.config("takeScreenshoot");

    loginAndGoToDashBoard(scenarioFunctionality,step) {
      cy.visit(this.url)
        .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null});
      cy.get(".email.ember-text-field.gh-input.ember-view").type(
        this.user
      ).then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null});
      cy.get(".password.ember-text-field.gh-input.ember-view").type(
        this.pass
      ).then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null});
      cy.wait(1000)
      cy.get("#ember12 > span").click()
        .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null});
      cy.wait(1000)
    }
  
  }
  