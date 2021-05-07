export class DashboardPage {

  clickOnPosts() {
    cy.get('#ember30').click()
  }

  clickOnPages() {
    cy.get('#ember39').click()
  }

  clickOnTags() {
    cy.get('#ember40').click()
  }

  clickOnMember() {
    cy.get('#ember41').click()
  }
}
