/// <reference types="cypress" />

export class PagePage {

    clickToNewPage() {
        cy.get(".gh-btn.gh-btn-green.ember-view").click({ force: true });
    }

    addTitle(title) {
        cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view").type(title);
    }

    savePage() {
        cy.get('.flex.items-center.pl4.pr4.f8.nudge-left--1.h9.br2.br--right.bg-white').click()
    }

    getDraft(title) {
        cy.get('.gh-content-entry-title').contains(title).click({ force: true });
    }

    addParagraph(text) {
        cy.get('.koenig-editor__editor.__mobiledoc-editor').click()
        cy.get('.koenig-editor__editor.__mobiledoc-editor').type(text)
    }

    publishPage() {
        cy.get('.gh-publishmenu.ember-view').click()
        cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click()
    }

    schedulePage() {
        cy.get('.gh-publishmenu.ember-view').click();
        cy.get('.gh-publishmenu-radio-label').contains('Schedule it for later').click();
        cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click();
    }

    backToPages() {
        cy.get('.blue.link.fw4.flex.items-center.ember-view').click();
    }

    pageWithNameExist(title) {
        cy.get('.gh-content-entry-title').contains(title).should("not.be.empty");
    }

    deleteTitle() {
        cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view").clear();
    }

    openSettings() {
        cy.get('.post-settings').click();
    }

    deletePage() {
        cy.get('form').find('.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button').contains('Delete page').click();
        cy.get('.modal-footer').find('.gh-btn.gh-btn-red.gh-btn-icon.ember-view').contains('Delete').click();
    }
}