export class DashboardPage {

  clickOnPosts() {
    cy.waitFor(3000)
    cy.get(".ember-view").contains('Posts').click({ force: true });
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
