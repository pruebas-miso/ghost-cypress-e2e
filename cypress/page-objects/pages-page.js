/// <reference types="cypress" />

export class PagePage {

    version = Cypress.config("versionGhost");
    takeScreenshoot = Cypress.config("takeScreenshoot");

    clickToNewPage(scenarioFunctionality, step) {
        cy.get(".gh-btn.gh-btn-green.ember-view").click({ force: true, multiple: true })
            .then(async () => { this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`) : null });
    }

    addTitle(title, scenarioFunctionality, step) {
        cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view").type(title)
            .then(async () => { this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`) : null });
    }

    savePage() {
        cy.get('.flex.items-center.pl4.pr4.f8.nudge-left--1.h9.br2.br--right.bg-white').click();
    }

    getDraft(title, scenarioFunctionality, step) {
        cy.get('.gh-content-entry-title').contains(title).click({ force: true })
            .then(async () => { this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`) : null });
    }

    addParagraph(text, scenarioFunctionality, step) {
        cy.get('.koenig-editor__editor.__mobiledoc-editor').click();
        cy.get('.koenig-editor__editor.__mobiledoc-editor').type(text)
            .then(async () => { this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`) : null });
    }

    publishPage(scenarioFunctionality, step) {
        cy.get('.gh-publishmenu.ember-view').click()
            .then(async () => { this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`) : null });
        cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click()
            .then(async () => { this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`) : null });
    }

    schedulePage(scenarioFunctionality, step) {
        cy.get('.gh-publishmenu.ember-view').click()
            .then(async () => { this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`) : null });
        cy.get('.gh-publishmenu-radio-label').contains('Schedule it for later').click()
            .then(async () => { this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`) : null });
        cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click()
            .then(async () => { this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`) : null });
    }

    pageWithNameExist(title, scenarioFunctionality, step) {
        cy.get('.gh-content-entry-title').contains(title).should("not.be.empty")
            .then(async () => { this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`) : null });
    }

    deleteTitle(scenarioFunctionality, step) {
        cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view").clear()
            .then(async () => { this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`) : null });
    }

    openSettings(scenarioFunctionality, step) {
        cy.get('.post-settings').click()
            .then(async () => { this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`) : null });
    }

    deletePage(scenarioFunctionality, step) {
        cy.get('form').find('.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button').contains('Delete page').click()
            .then(async () => { this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`) : null });
        cy.get('.modal-footer').find('.gh-btn.gh-btn-red.gh-btn-icon.ember-view').contains('Delete').click()
            .then(async () => { this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`) : null });
    }
}