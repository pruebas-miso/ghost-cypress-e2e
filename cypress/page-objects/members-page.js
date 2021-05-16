/// <reference types="cypress" />

export class MemberPage {

    version = Cypress.config("versionGhost");
    takeScreenshoot = Cypress.config("takeScreenshoot");

    clickToNewMember(scenarioFunctionality,step) {
        cy.get('[class="ember-view gh-btn gh-btn-green"]').first().click({ force: true })
        .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null});
    }

    typeName(name, scenarioFunctionality,step) {
        cy.get('#member-name').type(name, { force: true })
        .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null});
    }

    typeEmail(email, scenarioFunctionality,step) {
        cy.get('#member-email').type(email, { force: true })
        .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null});
    }

    typeNote(note, scenarioFunctionality,step) {
        cy.get('#member-note').type(note, { force : true })
        .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null});
    }

    clickSaveMember() {
        cy.get(".gh-btn-blue").first().click({ force: true });
    }

    clickToMember(scenarioFunctionality,step) {
        cy.visit('http://localhost:2368/ghost/#/members');
        cy.get('ol>li').last().click()
        .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null});
    }

    deleteMember(scenarioFunctionality,step) {
        cy.get(".gh-btn-red").first().click({ force: true })
        .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null});
        cy.wait(500);
        cy.get('[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click( { force: true } )
        .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null});
    }

    searchMember(name, scenarioFunctionality,step) {
        cy.visit('http://localhost:2368/ghost/#/members');
        cy.get('[class="ember-text-field gh-input ember-view gh-members-list-searchfield "]').type(name, { force : true })
        .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null});
        cy.wait(500);
        cy.get('[class="ma0 pa0 gh-members-list-name "]').should('contain', name)
        .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null});
    }
    
}