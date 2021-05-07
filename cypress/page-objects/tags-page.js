
/// <reference types="cypress" />

export class TagsPage {

    navigatetoDashboard() {
      cy.visit('http://localhost:2368/ghost/#/signin')
      cy.get('.email.ember-text-field.gh-input.ember-view').type('pedro3087@gmail.com')
      cy.get('.password.ember-text-field.gh-input.ember-view').type('administrador')
      cy.get('#ember12 > span').click()
    }

    clickToAddNewTag() {
        cy.get('.ember-view.gh-btn.gh-btn-primary').click()
      }
  
    addTodo(todoText) {
      cy.get('.new-todo').type(todoText + '{enter}')
    }
}