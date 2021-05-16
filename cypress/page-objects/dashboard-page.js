export class DashboardPage {

  version = Cypress.config("versionGhost");
  takeScreenshoot = Cypress.config("takeScreenshoot");

  clickOnPosts(scenarioFunctionality,step) {
    cy.waitFor(1000)
    cy.get(".ember-view").contains('Posts').click({ force: true })
      .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null});
  }

  clickOnPages() {
    cy.get('[href="#/pages/"]').click()
  }

  clickOnTags() {
    cy.waitFor(3000)
    cy.get(".ember-view").contains('Tags').click({ force: true });
  }

  clickOnMember() {
    cy.waitFor(3000)
    cy.get(".ember-view").contains('Members').click({ force: true });
  }
}
