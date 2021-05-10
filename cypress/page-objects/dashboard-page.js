export class DashboardPage {

  clickOnPosts() {
    cy.get('#ember30').click()
  }

  clickOnPages() {
    cy.get('[href="#/pages/"]').click()
  }

  clickOnTags() {
    cy.get('#ember40').click()
  }

  clickOnMember() {
    cy.get('#ember32').click()
  }
}
