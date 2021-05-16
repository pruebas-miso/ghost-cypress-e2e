/// <reference types="cypress" />

export class MemberPage {
    clickToNewMember() {
        cy.get('[class="ember-view gh-btn gh-btn-green"]').first().click({ force: true })
        .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${scenarioFunctionality}_v${this.version}_cypress_paso_${step['step']++}`):null});
    }

    typeName(name) {
        cy.get('#member-name').type(name, { force: true })
        .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${scenarioFunctionality}_v${this.version}_cypress_paso_${step['step']++}`):null});
    }

    typeEmail(email) {
        cy.get('#member-email').type(email, { force: true })
        .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${scenarioFunctionality}_v${this.version}_cypress_paso_${step['step']++}`):null});
    }

    typeNote(note) {
        cy.get('#member-note').type(note, { force : true })
        .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${scenarioFunctionality}_v${this.version}_cypress_paso_${step['step']++}`):null});
    }

    clickSaveMember() {
        cy.get(".gh-btn-blue").first().click({ force: true })
        .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${scenarioFunctionality}_v${this.version}_cypress_paso_${step['step']++}`):null});
    }

    clickToMember() {
        cy.visit('http://localhost:2368/ghost/#/members');
        cy.get('ol>li').last().click()
        .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${scenarioFunctionality}_v${this.version}_cypress_paso_${step['step']++}`):null});
    }

    deleteMember() {
        cy.get(".gh-btn-red").first().click({ force: true })
        .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${scenarioFunctionality}_v${this.version}_cypress_paso_${step['step']++}`):null});
        cy.wait(500);
        cy.get('[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click( { force: true } )
        .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${scenarioFunctionality}_v${this.version}_cypress_paso_${step['step']++}`):null});
    }

    searchMember(name) {
        cy.visit('http://localhost:2368/ghost/#/members');
        cy.get('[class="ember-text-field gh-input ember-view gh-members-list-searchfield "]').type(name, { force : true })
        .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${scenarioFunctionality}_v${this.version}_cypress_paso_${step['step']++}`):null});
        cy.wait(500);
        cy.get('[class="ma0 pa0 gh-members-list-name "]').should('contain', name)
        .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${scenarioFunctionality}_v${this.version}_cypress_paso_${step['step']++}`):null});
    }
    
}